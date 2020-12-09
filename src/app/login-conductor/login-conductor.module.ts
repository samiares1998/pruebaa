import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginConductorPageRoutingModule } from './login-conductor-routing.module';

import { LoginConductorPage } from './login-conductor.page';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginConductorPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HTTP,
    HttpClient
  ],
  declarations: [LoginConductorPage]
})
export class LoginConductorPageModule {}
