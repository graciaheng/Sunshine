import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent],
})

export class HomePage {
  name: string = "";
  
  constructor(private storage:Storage) {}

  async openBrowser() {
    await Browser.open({url: 'https://youtu.be/UtBsl3j0YRQ?si=GccJJjrtCVxJpMIi'});
  };


}
