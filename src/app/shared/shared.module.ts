import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MainlayoutComponent } from './@components/mainlayout/mainlayout.component';
import { HeaderComponent } from './@components/header/header.component';
import { FooterComponent } from './@components/footer/footer.component';


@NgModule({
  declarations: [MainlayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ], exports: [MainlayoutComponent]
})
export class SharedModule { }
