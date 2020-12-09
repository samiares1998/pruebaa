import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal-mensaje',
  templateUrl: './modal-mensaje.component.html',
  styleUrls: ['./modal-mensaje.component.scss'],
})
export class ModalMensajeComponent implements OnInit {

  constructor(private modal:ModalController) { }

  ngOnInit() {}
  dismissModal() {
    this.modal.dismiss();
}

}
