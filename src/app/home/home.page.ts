import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  name: string = "";
  
  constructor(private storage:Storage) {}



}
