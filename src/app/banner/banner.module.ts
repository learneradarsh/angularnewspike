import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { CustomBannerComponent } from './components/custom-banner/custom-banner.component';


@NgModule({
  declarations: [CustomBannerComponent],
  imports: [
    CommonModule,
    BannerRoutingModule
  ]
})
export class BannerModule { }
