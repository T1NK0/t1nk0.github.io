import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { RowElement } from '../interfaces/row-element';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  //Emits to subscribers on change
  private subject: BehaviorSubject<RowElement[]> = new BehaviorSubject<RowElement[]>([]);
  //Observable looking on tableRows
  tableRows: Observable<RowElement[]>;
  //Datasource of the tableRows
  dataSource: MatTableDataSource<RowElement>;

  constructor() {
    this.tableRows = this.subject.asObservable();
    this.dataSource = new MatTableDataSource<RowElement>([]);
    this.tableRows.subscribe((data) => {
      this.dataSource.data = this.dataSource.data.concat(data);
    });
  }

  public addToTable(row: RowElement){
    let tempImage: RowElement[] = [row];
    this.subject.next(tempImage);
  }

  public updateRow(newRow: RowElement) {
    this.
  }
}
