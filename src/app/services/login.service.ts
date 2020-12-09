import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import {HttpClientModule} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api = 'http://app.telecoper.com:19763/TelecoperSiteOneRS_1.0.0/services/telecoper_site_one_r_s/loginConductor';
  private headers: any = {}; 
  constructor(  public http: HttpClient,
    private Http: HTTP,private uniqueDeviceID: UniqueDeviceID) { 
      this.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      };
      this.Http.setRequestTimeout(10.0);


    }

   getLogin(documento:string,password:string){
    const body = JSON.stringify(
      {'documento':documento,'password':password,'deviceID':''});

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    const path = `${this.api}/loginConductor`;
    return this.http.post<any>(path,body ,{headers: headers});
  
  }

  async getData() {
    try {
      const url = 'https://api.example.com';
      const params = {};
      const headers = {};

      const response = await this.Http.get(url, params, headers);

      console.log(response);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      console.log(response.headers);

    } catch (error) {
      console.error(error);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }
  }
}
