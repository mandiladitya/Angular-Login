import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { RouterLinkActive } from '@angular/router';
import { ResetmessageComponent } from './resetmessage/resetmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForgotComponent,
    NewpasswordComponent,
    ResetmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
