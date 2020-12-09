import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {LoadingController} from '@ionic/angular';
declare var google;
import { ModalMensajeComponent } from '../modal/modal-mensaje/modal-mensaje.component';
import { ModalController } from '@ionic/angular';
import { ModalTrabajoComponent } from '../modal/modal-trabajo/modal-trabajo.component';
import { ModalHistorialPage } from '../modal/modal-historial/modal-historial.page';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  public folder: string;
  private dynamicColor: string
  public selectedIndex = 0;
  constructor(public modalController: ModalController,private activatedRoute: ActivatedRoute,private menu: MenuController,private geolocation: Geolocation,private loadCtrl:LoadingController) { }
  public appPages = [
    {
      title: 'Perfil',
      url: 'perfil',
      icon: 'home'
    },

    {
      title: 'waze-mapas',
      url: '/folder/Spam',
      icon: 'car'
    },
  
  ];
  ngOnInit() {
  this.folder="En Linea";
  this.dynamicColor = 'blue';
  this.loadMap();
  }
  async loadMap() {
    
    const loading = await this.loadCtrl.create();
    loading.present();

    this.geolocation.getCurrentPosition().then((resp) => {
      const myLatLng={
      lat:resp.coords.latitude,
      lng:resp.coords.longitude
      }
      const mapEle: HTMLElement=document.getElementById('map');
      const map=new google.maps.Map(mapEle,{
        center:myLatLng,
        zoom:16
      });
      google.maps.event.addListenerOnce(map,'idle',()=>{
        loading.dismiss();
        const  marker = new google.maps.Marker({
          position:{
            lat: myLatLng.lat,
            lng: myLatLng.lng
          },
          map:map,
          title:'hello world',
          animation: google.maps.Animation.DROP,
          icon:'assets/icon/icono_vehiculo.png',
        })
      })
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
    }

    //status online 
    status($event) {
      if(this.folder=="En Linea"){
        this.folder="Fuera de Linea"; 
      }else{
        this.folder="En Linea"; 
      }
     

    }
    //modal Perfil
    async mensajePasajero() {
      const modal = await this.modalController.create({
        component: ModalMensajeComponent,
        cssClass: 'select-modal'
      });
      return await modal.present();
    }
  
    //Modal forma de trabajo 
    async formaTrabajo() {
      const modal = await this.modalController.create({
        component: ModalTrabajoComponent,
        cssClass: 'select-modal-two'
      });
      return await modal.present();
    }
    async historial() {
      const modal = await this.modalController.create({
        component: ModalHistorialPage,
        cssClass: ''
      });
      return await modal.present();
    }
  
}
