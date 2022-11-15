import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RowElement } from 'src/app/interfaces/row-element';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { DialogRowContentComponent } from '../dialogs/dialog-row-content/dialog-row-content.component';

const ELEMENT_DATA: RowElement[] = [];

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.sass']
})
export class TableDataComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  tableDataSource = ELEMENT_DATA;
  clickedRows = new Set<RowElement>();
  
  constructor(private dialog: MatDialog, public dataTableService: FileUploadService) { }

  clickedRow(row: RowElement): void{
    console.log('red', row)
    this.dialog.open(DialogRowContentComponent, {
        data: row
    });
  }

  ngOnInit(): void {
  }
}