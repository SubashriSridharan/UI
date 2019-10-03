import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
data: any;
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
    
    this.http.get('http://10.117.189.147:8082/INGProduct/api/category').subscribe((response) => {
      if (response) {
        this.data = response;
        console.log(response);
      }
    });
  }

}
