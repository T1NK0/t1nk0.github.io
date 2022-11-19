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

  //Gets form values from the upload form group.
  uploadImageForm = this.fb.group({
    uploadName: [''],
    uploadSize: [''],
    uploadType: [''],
  })

  ngOnInit(): void {
  }


  save() {
    let test = this.uploadImageForm.value
    const tempRow: RowElement = {image: this.data.image, name: test.uploadName, size: test.uploadSize, type: test.uploadType}
      this.dataTableService.addToTable(tempRow);
          // this.dataTableService.getAllData().subscribe((data: RowElement[]=> {
    //   this.dataSource.data = data;
    // }))
  }

}
