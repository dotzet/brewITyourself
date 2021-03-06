import { Component, AfterViewInit } from '@angular/core';
import { SuppliersDaoService } from '../../../suppliers-dao.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-supplier-read-form',
  templateUrl: './supplier-read-form.component.html',
  styleUrls: ['./supplier-read-form.component.css']
})
export class SupplierReadFormComponent implements AfterViewInit {
  supplier: string;
  suppliersDao: SuppliersDaoService | null;
  supplierJSONstring: string;
  supplierJSON: JSON;
  floatLabelOption: boolean = true;
  public supplierReadForm: FormGroup = new FormGroup({
    vat: new FormControl(''),
    companyName: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    region: new FormControl(''),
    postalCode: new FormControl(''),
    country: new FormControl(''),
    phone: new FormControl(''),
    fax: new FormControl(''),
    homePage: new FormControl('')
  });

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.supplier = this.route.snapshot.paramMap.get('supplier');
  }
  ngAfterViewInit() {
    this.suppliersDao = new SuppliersDaoService(this.http);
    this.suppliersDao.getSupplier(this.supplier).subscribe((data) => {
    this.supplierJSONstring = JSON.stringify(data);
    this.supplierJSON = JSON.parse(this.supplierJSONstring);
    this.supplierReadForm.setValue(this.supplierJSON);
    });
  }

}
