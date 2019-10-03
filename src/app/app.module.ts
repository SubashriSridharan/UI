import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { CarouselComponent } from './carousel/carousel.component';
import {CarouselModule} from 'primeng/carousel';
import { ProductListComponent } from './product-list/product-list.component';
import {AccordionModule} from 'primeng/accordion';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MenuComponent } from './menu/menu.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import { ProductComponent } from './product/product.component';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoryComponent,
    CarouselComponent,
    ProductListComponent,
    FileUploadComponent,
    MenuComponent,
    ProductComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    DropdownModule,
    PanelModule,
    CardModule,
    InputTextModule,
    TableModule,
    CarouselModule,
    AccordionModule,
    FileUploadModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    MegaMenuModule,
    PanelMenuModule,
    DialogModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
