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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
