import { ModuleWithProviders, NgModule } from '@angular/core';
import { DataPersistence } from './data-persistence';

export * from './data-persistence';

/**
 * Nx for without dependency on router-store
 * @whatItDoes Provides services for enterprise Angular applications.
 *
 * See {@link DataPersistence} for more information.
 */
@NgModule({})
export class NxModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NxModule, providers: [DataPersistence] };
  }
}
