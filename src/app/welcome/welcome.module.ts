import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';
import {HistorialComponent} from '../modal/historial/historial.component';
import {ModalMensajeComponent} from '../modal/modal-mensaje/modal-mensaje.component';
import {ModalPerfilComponent} from '../modal/modal-perfil/modal-perfil.component';
import {ModalTrabajoComponent} from '../modal/modal-trabajo/modal-trabajo.component';
@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}
