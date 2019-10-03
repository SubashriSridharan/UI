import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  data: any;
  categoryDetails: any;
  productDetails: any;
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
    this.http.get(environment.baseurl +'/INGProduct/api/category').subscribe((response) => {
      if (response) {
        let obj = JSON.parse(JSON.stringify(response));
        let list = obj.categoryList;
        // this.data = response;
        this.categoryDetails = list;
        console.log(response);
        // sessionStorage.setItem("categoryId", response['categoryId']);
      }
    });
}
viewData(categoryId){
  this.http.get(environment.baseurl +`/INGProduct/api/category/${categoryId}`).subscribe((response) => {
    if (response) {
       let obj = JSON.parse(JSON.stringify(response));
       let list1 = obj.productList;
       this.data = response;
      this.productDetails = list1;
      console.log(response);
      // sessionStorage.setItem("categoryId", response['categoryId']);
    }
  });
}
}
