import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ContentComponent } from './content/content.component';
import { AddProductComponent } from './core/gestion de produit/add-product/add-product.component';
import { DetailComponent } from './core/gestion de produit/detail/detail.component';
import { FormProductComponent } from './core/gestion de produit/form-product/form-product.component';
import { LoginComponent } from './login/login.component';
import { NOTFOUNDComponent } from './notfound/notfound.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  }
  ,
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
