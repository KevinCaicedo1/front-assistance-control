import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

  export interface AsistData {
  name: string;
  assistDate: string;
  entryTime: string;
  departureTime: string;
  hoursWorked: string;
}

const ELEMENT_DATA: AsistData[] = [
  { name: 'Juan', assistDate: '2021-04-01', entryTime: '08:00', departureTime: '12:00', hoursWorked: '4' },
  { name: 'Juan', assistDate: '2021-04-01', entryTime: '08:00', departureTime: '12:00', hoursWorked: '4' },
  { name: 'Juan', assistDate: '2021-04-01', entryTime: '08:00', departureTime: '12:00', hoursWorked: '4' },
  { name: 'Juan', assistDate: '2021-04-01', entryTime: '08:00', departureTime: '12:00', hoursWorked: '4' },
  { name: 'Juan', assistDate: '2021-04-01', entryTime: '08:00', departureTime: '12:00', hoursWorked: '4' },
  { name: 'Juan', assistDate: '2021-04-01', entryTime: '08:00', departureTime: '12:00', hoursWorked: '4' },
  { name: 'Juan', assistDate: '2021-04-01', entryTime: '08:00', departureTime: '12:00', hoursWorked: '4' },
  { name: 'Juan', assistDate: '2021-04-01', entryTime: '08:00', departureTime: '12:00', hoursWorked: '4' },
  { name: 'Juan', assistDate: '2021-04-01', entryTime: '08:00', departureTime: '12:00', hoursWorked: '4' },
  { name: 'Juan', assistDate: '2021-04-01', entryTime: '08:00', departureTime: '12:00', hoursWorked: '4' },
  { name: 'Juan', assistDate: '2021-04-01', entryTime: '08:00', departureTime: '12:00', hoursWorked: '4' },];


  @Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
  })
export class ReportComponent implements AfterViewInit {

  displayedColumns: string[] = ['nombre', 'fecha', 'entrada', 'salida', 'trabajadas'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<AsistData>(ELEMENT_DATA);

  constructor() { 
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

