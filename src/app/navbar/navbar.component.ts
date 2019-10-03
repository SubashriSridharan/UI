import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService]
})
export class NavbarComponent implements OnInit {
  uploadedFiles: any[] = [];
  display: boolean = false;

  showDialog() {
      this.display = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
