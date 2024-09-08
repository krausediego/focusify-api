import { AuthController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { IAuth } from '@/domain/interfaces';
import { makeAuthService } from '@/main/factories/domain/services';

export const makeAuthController = (
  serviceName: IAuth.AuthServicesName,
): Controller => {
  return new AuthController(serviceName, makeAuthService(serviceName));
};
