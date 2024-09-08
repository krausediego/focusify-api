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
}
