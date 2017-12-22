import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var MyCordovaPlugin;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  echoNative(){
    MyCordovaPlugin.echo(['a', 123, 'b', 456], result => {
      //理論上不會跑
      console.log(result);
      alert(result);
    }, error => alert(error))
  }

  getDateNative() {
    MyCordovaPlugin.getDate(result => {
      console.log(result);
      alert(result);
    }, error => alert(error))
  }

}
