import { Component, OnInit } from '@angular/core';
declare var google;
import {LoadingController} from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent implements OnInit {

  constructor(private loadCtrl:LoadingController,private geolocation: Geolocation) { }

  ngOnInit() {
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

  
}
