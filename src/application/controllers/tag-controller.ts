import { ITag, ICreateTag, IFindAllPaginatedTags, IGetTagById, IUpdateTag, IDeleteTag } from '@/domain/interfaces';

import { getHttpError, ok } from '../helpers';
import { Controller, Http } from '../interfaces';

export class TagController implements Controller {
  constructor(
    private readonly serviceName: ITag.TagServicesName,
    private readonly service: ITag.TagServices,
  ) {}

  async handle({ data: params, locals }: Http.Request): Promise<Http.Response> {
    return this?.[this.serviceName]({ params, locals }).catch((e: any) => {
      return getHttpError(e);
    });
  }

  private async createTag({ params, locals }: ICreateTag.ParamsService): Promise<Http.Response> {
    const { name, color } = params;

    const content = await (this.service() as ICreateTag).run({
      name,
      color,
      userId: locals?.userId,
    });

    return ok({ ...content });
  }

  private async findAllPaginatedTags({ params, locals }: IFindAllPaginatedTags.ParamsService): Promise<Http.Response> {
    const { page, limit } = params;

    const content = await (this.service() as IFindAllPaginatedTags).run({
      page,
      limit,
      userId: locals?.userId,
    });

    return ok({ ...content });
  }

  private async getTagById({ params, locals }: IGetTagById.ParamsService): Promise<Http.Response> {
    const { id } = params;

    const content = await (this.service() as IGetTagById).run({
      id,
      userId: locals?.userId,
    });

    return ok({ ...content });
  }

  private async updateTag({ params, locals }: IUpdateTag.ParamsService): Promise<Http.Response> {
    const content = await (this.service() as IUpdateTag).run({
      ...params,
      userId: locals?.userId,
    });

    return ok({ ...content });
  }

  private async deleteTag({ params, locals }: IDeleteTag.ParamsService): Promise<Http.Response> {
    const { id } = params;

    const content = await (this.service() as IDeleteTag).run({
      id,
      userId: locals?.userId,
    });

    return ok({ ...content });
  }
}
