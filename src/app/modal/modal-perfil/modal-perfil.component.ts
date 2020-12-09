import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.scss'],
})
export class ModalPerfilComponent implements OnInit {
  public antigua: any;
  public nueva: any;
  public confirmar: any;
  constructor(private modal:ModalController) { }

  ngOnInit() {}
  dismissModal() {
    this.modal.dismiss();
}

onSubmit(){
  
}

}
