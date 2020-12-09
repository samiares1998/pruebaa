import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPerfilComponent } from '../../modal/modal-perfil/modal-perfil.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPerfilComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}

