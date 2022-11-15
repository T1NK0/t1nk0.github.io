import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  {path: 'dialog', component: DialogBoxComponent},
  {path: '', component: FileUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
