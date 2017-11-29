import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugsList } from './drugs-list';

@NgModule({
  declarations: [
    DrugsList,
  ],
  imports: [
    IonicPageModule.forChild(DrugsList),
  ],
  exports: [
    DrugsList
  ]
})
export class DrugsListModule {}
