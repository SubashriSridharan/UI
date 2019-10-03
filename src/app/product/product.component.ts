import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categoryDetails: any;
  data: any;
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  //   this.http.get(`http://10.117.189.173:8082/INGProduct/api/category/${categoryId}`).subscribe((response) => {
  //   if (response) {
  //      let obj = JSON.parse(JSON.stringify(response));
  //      let list1 = obj.categoryList;
  //      this.data = response;
  //     this.categoryDetails = list1;
  //     console.log(response);
  //     // sessionStorage.setItem("categoryId", response['categoryId']);
  //   }
  // });
  }

}
