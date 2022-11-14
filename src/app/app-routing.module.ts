import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { NOTFOUNDComponent } from './notfound/notfound.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
 {
  path:'login',component:LoginComponent
 }
  ,
  {
    path:'home',component:TestComponent
  },
  {
    path:'addproduct',component:AddproductComponent
  },
  {
    path:'content',component:ContentComponent
  },
  {
    path:'**',component:NOTFOUNDComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
