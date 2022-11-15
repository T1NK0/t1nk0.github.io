import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogRowContentComponent } from './components/dialogs/dialog-row-content/dialog-row-content.component';

const routes: Routes = [
  // {path: 'dialog', component: DialogRowContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
