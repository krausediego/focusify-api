import { IProject, ICreateProject, IFindAllPaginatedProjects, IGetProjectById, IUpdateProject, IDeleteProject } from '@/domain/interfaces';

import { getHttpError, ok } from '../helpers';
import { Controller, Http } from '../interfaces';

export class ProjectController implements Controller {
  constructor(
    private readonly serviceName: IProject.ProjectServicesName,
    private readonly service: IProject.ProjectServices,
  ) {}

  async handle({ data: params, locals }: Http.Request): Promise<Http.Response> {
    return this?.[this.serviceName]({ params, locals }).catch((e: any) => {
      return getHttpError(e);
    });
  }

  private async createProject({ params, locals }: ICreateProject.ParamsService): Promise<Http.Response> {
    const { name, color } = params;

    const content = await (this.service() as ICreateProject).run({
      name,
      color,
      userId: locals?.userId,
    });

    return ok({ ...content });
  }

  private async findAllPaginatedProjects({ params, locals }: IFindAllPaginatedProjects.ParamsService): Promise<Http.Response> {
    const { page, limit } = params;

    const content = await (this.service() as IFindAllPaginatedProjects).run({
      page,
      limit,
      userId: locals?.userId,
    });

    return ok({ ...content });
  }

  private async getProjectById({ params, locals }: IGetProjectById.ParamsService): Promise<Http.Response> {
    const { id } = params;

    const content = await (this.service() as IGetProjectById).run({
      id,
      userId: locals?.userId,
    });

    return ok({ ...content });
  }

  private async updateProject({ params, locals }: IUpdateProject.ParamsService): Promise<Http.Response> {
    const content = await (this.service() as IUpdateProject).run({
      ...params,
      userId: locals?.userId,
    });

    return ok({ ...content });
  }

  private async deleteProject({ params, locals }: IDeleteProject.ParamsService): Promise<Http.Response> {
    const { id } = params;

    const content = await (this.service() as IDeleteProject).run({
      id,
      userId: locals?.userId,
    });

    return ok({ ...content });
  }
}
