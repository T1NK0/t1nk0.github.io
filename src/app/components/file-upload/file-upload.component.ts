import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RowElement } from 'src/app/interfaces/row-element';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { DialogRowContentComponent } from '../dialogs/dialog-row-content/dialog-row-content.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.sass']
})
export class FileUploadComponent implements OnInit {
  constructor( public dataTableService: FileUploadService) { }

  ngOnInit(): void {
  }

  imageUpload(event: any) {
    var file = event.target.files[0];
    console.log(file.name);
    const rowEle:RowElement = {name: file.name, size: file.size, type: file.type};
    this.dataTableService.addToTable(rowEle);
  }
}
