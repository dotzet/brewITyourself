import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers-button',
  templateUrl: './suppliers-button.component.html',
  styleUrls: ['./suppliers-button.component.css']
})

export class SuppliersButtonComponent implements OnInit {
  buttonName = 'Proveedores';
  constructor() {
  }

  ngOnInit() {
  }

}
