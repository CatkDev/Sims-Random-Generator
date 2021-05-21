import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllTraitsPage } from './all-traits.page';

const routes: Routes = [
  {
    path: '',
    component: AllTraitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllTraitsPageRoutingModule {}
