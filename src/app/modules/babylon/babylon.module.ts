import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BabylonRoutingModule } from './babylon-routing.module';
import { HouseComponent } from './house/house.component';

@NgModule({
  declarations: [HouseComponent],
  imports: [CommonModule, BabylonRoutingModule],
})
export class BabylonModule {}
