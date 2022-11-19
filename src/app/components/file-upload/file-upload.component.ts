import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RowElement } from 'src/app/interfaces/row-element';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { DialogImageUploadComponent } from '../dialogs/dialog-image-upload/dialog-image-upload.component';
import { DialogRowContentComponent } from '../dialogs/dialog-row-content/dialog-row-content.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.sass']
})
export class FileUploadComponent implements OnInit {
  constructor(private dialog: MatDialog, public dataTableService: FileUploadService) { }

  ngOnInit(): void {
  }

  imageUpload(event: any) {
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.dialog.open(DialogImageUploadComponent,
        {
          data: {image: reader.result, name: '', size: '', type: ''}
        });
		}
  }
}
