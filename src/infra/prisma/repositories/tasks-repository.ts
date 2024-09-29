import { BadRequestError } from '@/application/errors';
import { IPrisma, ITasksRepository } from '@/domain/interfaces';
import { Prisma, PrismaClient, Task } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class TasksRepository implements ITasksRepository {
  constructor(private readonly prisma: IPrisma) {}

  async createTask({ tagIds, projectId, ...props }: ITasksRepository.CreateTask): Promise<Task | null> {
    const taskCreated = await this.prisma.getPrismaClient().$transaction(async tx => {
      const task = await tx.task.create({ data: props });

      await this.createTagAssociations(tx, tagIds, task.id, props.userId);

      await tx.projectTask.create({
        data: {
          projectId,
          taskId: task.id,
          userId: props.userId,
        },
      });

      return task;
    });

    return taskCreated;
  }

  private async createTagAssociations(
    tx: Omit<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'>,
    tagIds: string[],
    taskId: string,
    userId: string,
  ): Promise<void> {
    const tagPromises = tagIds.map(tagId => {
      return tx.tagTask.create({
        data: {
          tagId,
          taskId,
          userId,
        },
      });
    });

    await Promise.all(tagPromises);
  }

  async findTaskById({ id, userId }: ITasksRepository.FindById): Promise<ITasksRepository.FindByIdResponse> {
    const task = await this.prisma.getPrismaClient().task.findFirst({
      where: {
        AND: [{ id }, { userId }],
      },
      include: {
        TagTask: {
          select: {
            tag: {
              select: {
                id: true,
                name: true,
                color: true,
              },
            },
          },
        },
        ProjectTask: {
          select: {
            project: {
              select: {
                id: true,
                name: true,
                color: true,
              },
            },
          },
        },
      },
    });

    if (!task) {
      throw new BadRequestError('Task not found');
    }

    const { ProjectTask, TagTask, ...props } = task;

    const tags = TagTask.map(result => {
      return result.tag;
    });

    return {
      task: props,
      project: ProjectTask!.project,
      tags,
    };
  }

  async findAllActiveTasks({
    userId,
    name,
    startsWith,
    endsWith,
    projectId,
    page,
    limit,
  }: ITasksRepository.findAllActiveTasksProps): Promise<ITasksRepository.FindByIdResponse[]> {
    let paginated: number = 0;

    if (page && limit) {
      paginated = (page - 1) * limit || 0;
    }

    const tasks = await this.prisma.getPrismaClient().task.findMany({
      where: {
        AND: [
          { userId },
          { status: true },
          {
            name: {
              contains: name,
              mode: 'insensitive',
            },
          },
          {
            date: {
              gte: startsWith,
              lte: endsWith,
            },
          },
          { ProjectTask: { projectId } },
        ],
      },
      include: {
        TagTask: {
          select: {
            tag: {
              select: {
                id: true,
                name: true,
                color: true,
              },
            },
          },
        },
        ProjectTask: {
          select: {
            project: {
              select: {
                id: true,
                name: true,
                color: true,
              },
            },
          },
        },
      },
      skip: paginated,
      take: Number(limit) || 99,
      orderBy: [{ date: 'asc' }],
    });

    const tasksResponse = tasks.map(task => {
      const { ProjectTask, TagTask, ...props } = task;

      const tags = TagTask.map(result => {
        return result.tag;
      });

      return {
        task: props,
        tags,
        project: ProjectTask!.project,
      };
    });

    return tasksResponse;
  }
}
