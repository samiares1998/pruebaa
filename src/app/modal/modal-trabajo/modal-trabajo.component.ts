import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-modal-trabajo',
  templateUrl: './modal-trabajo.component.html',
  styleUrls: ['./modal-trabajo.component.scss'],
})
export class ModalTrabajoComponent implements OnInit {

  constructor(private modal:ModalController) { }

  ngOnInit() {}
  dismissModal() {
    this.modal.dismiss();
}

}
