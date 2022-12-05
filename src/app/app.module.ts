import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ContentComponent } from './content/content.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NOTFOUNDComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './core/gestion de produit/add-product/add-product.component';
import { FormProductComponent } from './core/gestion de produit/form-product/form-product.component';
import { DetailComponent } from './core/gestion de produit/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProductComponent } from './core/gestion de produit/list-product/list-product.component';
import { DeleteproductComponent } from './core/gestion de produit/deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './core/gestion de produit/updateproduct/updateproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ContentComponent,
    AddproductComponent,
    NOTFOUNDComponent,
    LoginComponent,
    AddProductComponent,
    FormProductComponent,
    DetailComponent,
    ListProductComponent,
    DeleteproductComponent,
    UpdateproductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
