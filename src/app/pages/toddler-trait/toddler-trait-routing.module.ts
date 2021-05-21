import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToddlerTraitPage } from './toddler-trait.page';

const routes: Routes = [
  {
    path: '',
    component: ToddlerTraitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToddlerTraitPageRoutingModule {}
