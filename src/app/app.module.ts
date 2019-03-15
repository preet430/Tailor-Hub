import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { Footer1Component } from './footer1/footer1.component';
import { PantsComponent } from './pants/pants.component';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShirtCustomizerComponent } from './shirt-customizer/shirt-customizer.component';
import { ForgetPswComponent } from './forget-psw/forget-psw.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ShirtsComponent,
    Footer1Component,
    PantsComponent,
    HowitworkComponent,
    ContactComponent,
    AboutComponent,
    CustomizerComponent,
    RegisterComponent,
    LoginComponent,
    ShirtCustomizerComponent,
    ForgetPswComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
