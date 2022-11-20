import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RowElement } from 'src/app/interfaces/row-element';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-dialog-image-upload',
  templateUrl: './dialog-image-upload.component.html',
  styleUrls: ['./dialog-image-upload.component.sass']
})
export class DialogImageUploadComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: RowElement, public dataTableService: FileUploadService, private fb: FormBuilder) { }

  //Gets form values from the upload form group. null at start since we have no data in there yet like we do on edit.
  uploadImageForm = this.fb.group({
    uploadName: [''],
    uploadSize: [''],
    uploadType: [''],
  })

  ngOnInit(): void {
  }


  //Send the data along to the
  save() {
    let test = this.uploadImageForm.value
    //Save the rows values in tempRow based off inputs in uploadImageForm.
    const tempRow: RowElement = {image: this.data.image, name: test.uploadName, size: test.uploadSize, type: test.uploadType}
      this.dataTableService.addToTable(tempRow);
  }

}
