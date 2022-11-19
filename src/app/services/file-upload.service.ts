import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { RowElement } from '../interfaces/row-element';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private container = Array<RowElement>();

  private dataContainer$ = new BehaviorSubject<RowElement[]>([]);

  //Table data (observable)
  private data$: Observable<RowElement[]> = this.dataContainer$.asObservable();

  constructor() {}

  //Data to add to table.
  public addToTable(row: RowElement): void{
    this.container.push(row);
    this.dataContainer$.next(this.container);
    console.log(this.container);
  }

  //Data to update from table.
  updateSelectedImage(row: RowElement) {
    this.container.push(row);
    this.dataContainer$.next(this.container);
    console.log(this.container);
  }

  //Return all data.
  getAllData(): Observable<RowElement[]> {
    return this.data$;
  }
}
