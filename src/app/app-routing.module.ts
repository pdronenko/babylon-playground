import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from './core/enums/routes.enum';

const routes: Routes = [{ path: '**', pathMatch: 'full', redirectTo: RoutesEnum.HOUSE }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
