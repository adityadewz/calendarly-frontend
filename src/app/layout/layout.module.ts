import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    // LayoutRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
