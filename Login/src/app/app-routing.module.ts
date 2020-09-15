import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ResetmessageComponent } from './resetmessage/resetmessage.component';
const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },

  {
    path:'forgot',component:ForgotComponent
  },
  {
    path:'newpassword',component:NewpasswordComponent
  },

    {
      path:'message',component:ResetmessageComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
