import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ContentComponent } from './content/content.component';
import { AddProductComponent } from './core/gestion de produit/add-product/add-product.component';
import { DeleteproductComponent } from './core/gestion de produit/deleteproduct/deleteproduct.component';
import { DetailComponent } from './core/gestion de produit/detail/detail.component';
import { FormProductComponent } from './core/gestion de produit/form-product/form-product.component';
import { ListProductComponent } from './core/gestion de produit/list-product/list-product.component';
import { UpdateproductComponent } from './core/gestion de produit/updateproduct/updateproduct.component';
import { LoginComponent } from './login/login.component';
import { NOTFOUNDComponent } from './notfound/notfound.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  }
  ,
  {
    path:'list',component:ListProductComponent
   },
   
  {
    path:'remove/:idofproduct',component:DeleteproductComponent
   },
   {
    path:'update/:idofproducttoupdateit',component:UpdateproductComponent
   },
  {
    path:'form',component:FormProductComponent
   },
 {
  path:'login',component:LoginComponent
 }
  ,
  {
    path:'addProduct',component:AddProductComponent
   }
  ,
  {
    path:'home',component:TestComponent
  },
  {
    path:'detail/:id',component:DetailComponent
  },
  {
    path:'addproduct',component:AddproductComponent
  },
  {
    path:'content',component:ContentComponent
  },
 /*  {
    path:'**',component:NOTFOUNDComponent
  } */
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
