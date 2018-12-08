import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier, Suppliers, SuppliersDaoService } from '../../../suppliers-dao.service';
import { MatTabsModule, MatTable, MatTableDataSource } from '@angular/material';




@Component({
  selector: 'app-suppliers-table',
  templateUrl: './suppliers-table.component.html',
  styleUrls: ['./suppliers-table.component.css']
})
export class SuppliersTableComponent implements AfterViewInit {

  displayedColumns = ['VAT', 'Company name', 'Address', 'City', 'Region', 'Postal Code', 'Country', 'Phone number', 'Fax', 'Home page'];
  suppliersDao: SuppliersDaoService | null;
  suppliersJSONstring: string;
  suppliersJSON: JSON;
  datasource: MatTableDataSource<Supplier> = new MatTableDataSource();
  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    this.suppliersDao = new SuppliersDaoService(this.http);
    this.suppliersDao.getSuppliers().subscribe((data) => {
      console.log(data);
      this.suppliersJSONstring = JSON.stringify(data);
      this.suppliersJSON = JSON.parse(this.suppliersJSONstring);
      console.log('suppliers JSON string not iterative: ' + this.suppliersJSONstring);
      console.log('suppliers JSON same as any: ' + this.suppliersJSON);
    });
  }
}

