import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RowElement } from 'src/app/interfaces/row-element';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { DialogRowContentComponent } from '../dialogs/dialog-row-content/dialog-row-content.component';



@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.sass']
})
export class TableDataComponent implements OnInit {
  public dataSource =  new MatTableDataSource<RowElement>();


  //Columns to display
  displayedColumns: string[] = ['name', 'size', 'type','image'];
  //ClickedRows to be the row we clicked
  clickedRows = new Set<RowElement>();

  constructor(private dialog: MatDialog, public dataTableService: FileUploadService) {
    this.dataTableService.getAllData().subscribe((data: RowElement[])=> {
      this.dataSource.data = data;
    });
  }

  // clickedRow(row: RowElement): void{
  //   //After closed set a subscribe to listen if data has been updated.
  //   this.dialog.open(DialogRowContentComponent, {
  //       data: row
  //   }).afterClosed().pipe(filter()).subscribe()};

  //Calls our clicked row, and send th data from our clicked row into the dialog i open to update the data.
  clickedRow(row: RowElement): void{
    //After closed set a subscribe to listen if data has been updated.
    this.dialog.open(DialogRowContentComponent, {
        data: row
    }).afterClosed().subscribe(updatedRow => this.dataTableService.addToTable(updatedRow))};

  ngOnInit(): void {
  }
}
