import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleTraitPageRoutingModule } from './single-trait-routing.module';

import { SingleTraitPage } from './single-trait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleTraitPageRoutingModule
  ],
  declarations: [SingleTraitPage]
})
export class SingleTraitPageModule {}
