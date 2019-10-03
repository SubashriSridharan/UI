import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path:"category", component:CategoryComponent },
  { path:"carousel", component:CarouselComponent },
  { path:"Navbar", component: NavbarComponent},
  { path:"upload", component: FileUploadComponent},
  { path:"product:productId", component: ProductComponent},
  { path:"product-list", component: ProductListComponent},
  { path:"footer", component: FooterComponent},
  { path:"**", redirectTo:'category' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
