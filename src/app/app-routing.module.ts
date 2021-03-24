import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { Form2Component } from './Component/form2/form2.component';
import { Form3Component } from './Component/form3/form3.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent} ,
 {  path: 'form2', component: Form2Component  },  
 {  path: 'form3', component: Form3Component  },   
  
 
  //children: [
   // { path: 'home', component: HomeComponent },
    // { path: 'form2', component: Form2Component  },
    // { path: 'form3', component:   Form3Component},
    //  ]},
     { path: '**', redirectTo: 'home' }  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


