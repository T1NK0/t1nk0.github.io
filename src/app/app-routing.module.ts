import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

const routes: Routes = [
  {path: 'dialog', component: DialogBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
