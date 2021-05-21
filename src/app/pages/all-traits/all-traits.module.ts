import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllTraitsPageRoutingModule } from './all-traits-routing.module';

import { AllTraitsPage } from './all-traits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllTraitsPageRoutingModule
  ],
  declarations: [AllTraitsPage]
})
export class AllTraitsPageModule {}
