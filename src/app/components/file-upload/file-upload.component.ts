import { Component, OnInit } from '@angular/core';
import { RowElement } from 'src/app/interfaces/row-element';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.sass']
})
export class FileUploadComponent implements OnInit {
  constructor(fileUploadService: FileUploadService) { }
  
  ngOnInit(): void {
  }

  imageUpload(event: any) {
    var file = event.target.files[0];
    console.log(file.name);
    const rowEle:RowElement = {name: file.name, size: file.size, type: file.type};
  }
}
