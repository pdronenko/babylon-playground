import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from '../../core/enums/routes.enum';
import { HouseComponent } from './house/house.component';

const routes: Routes = [{ path: RoutesEnum.HOUSE, component: HouseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BabylonRoutingModule {}
