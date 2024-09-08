import { ProjectController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { IProject } from '@/domain/interfaces';
import { makeProjectService } from '@/main/factories/domain/services';

export const makeProjectController = (
  serviceName: IProject.ProjectServicesName,
): Controller => {
  return new ProjectController(serviceName, makeProjectService(serviceName));
};
