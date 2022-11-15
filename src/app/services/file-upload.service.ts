import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { RowElement } from '../interfaces/row-element';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private subject: BehaviorSubject<RowElement[]> = new BehaviorSubject<RowElement[]>([]);
  tableRows: Observable<RowElement[]>;
  dataSource: MatTableDataSource<RowElement>;

  constructor() {
    this.tableRows = this.subject.asObservable();
    this.dataSource = new MatTableDataSource<RowElement>([]);
    this.tableRows.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  public addToTable(row: RowElement){
    let tempImage: RowElement[] = [row];
    this.subject.next(tempImage);
  }
}
