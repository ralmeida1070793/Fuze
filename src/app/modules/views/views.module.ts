import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { COMPONENTS } from './index';

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],
  exports: [],
  providers: [],
})
export class ViewsModule {}
