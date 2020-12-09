import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {HistorialComponent} from './modal/historial/historial.component';
import {ModalMensajeComponent} from './modal/modal-mensaje/modal-mensaje.component';
import {ModalPerfilComponent} from './modal/modal-perfil/modal-perfil.component';
import {ModalTrabajoComponent} from './modal/modal-trabajo/modal-trabajo.component';
import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { Platform } from '@ionic/angular';
@NgModule({
  declarations: [AppComponent,HistorialComponent,ModalMensajeComponent,ModalPerfilComponent,ModalTrabajoComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UniqueDeviceID,
    HttpClient,
    HTTP,
    Geolocation,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
