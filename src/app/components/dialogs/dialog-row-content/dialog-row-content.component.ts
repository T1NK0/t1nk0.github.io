import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RowElement } from 'src/app/interfaces/row-element';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-dialog-row-content',
  templateUrl: './dialog-row-content.component.html',
  styleUrls: ['./dialog-row-content.component.sass']
})
export class DialogRowContentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: RowElement, public dataTableService: FileUploadService) { }

  ngOnInit(): void {
  }

  uploadChosenImage(){
    this.dataTableService.addToTable(this.data);
  }

  updateChosenImage() {

  }
}
