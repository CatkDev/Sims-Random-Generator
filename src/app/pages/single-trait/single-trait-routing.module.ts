import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleTraitPage } from './single-trait.page';

const routes: Routes = [
  {
    path: '',
    component: SingleTraitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleTraitPageRoutingModule {}
