import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RowElement } from 'src/app/interfaces/row-element';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-dialog-row-content',
  templateUrl: './dialog-row-content.component.html',
  styleUrls: ['./dialog-row-content.component.sass']
})
export class DialogRowContentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: RowElement, public dataTableService: FileUploadService, public dialogRef: MatDialogRef<DialogRowContentComponent>, private fb: FormBuilder) { }

  updateImageForm = this.fb.group({
    uploadName: [this.data.name as string],
    uploadSize: [this.data.size as string],
    uploadType: [this.data.type as string],
  })

  ngOnInit(): void {
  }

  save(updateImageForm:any) {
    let test = updateImageForm.value
    const tempRow: RowElement = {image: this.data.image, name: test.uploadName, size: test.uploadSize, type: test.uploadType}
      // this.dataTableService.addToTable(tempRow);

    this.dialogRef.close(tempRow);
  }
}
