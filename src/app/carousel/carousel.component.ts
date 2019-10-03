import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  cars;
  constructor(private router: Router) { 
    this.cars = [
      {brand: '../../assets/category-1.jpg', title: 'Category1', id: 1},
      {brand: '../../assets/category-1.jpg', title: 'Category2', id:2},
      {brand: '../../assets/category-1.jpg', title: 'Category3', id:3},
      {brand: '../../assets/category-1.jpg', title: 'Category4', id:4},
      {brand: '../../assets/category-1.jpg', title: 'Category5', id:5}
  ];
  }

  ngOnInit() {
  }
  
  goto(){
    if(this.cars.id === 3){
      this.router.navigate(['/blouse']);
    }
    else{
      this.router.navigate(['/book']);
    }
  }
}
