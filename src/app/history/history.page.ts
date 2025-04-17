import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [ IonDatetime, IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HistoryPage implements OnInit {
  gratitudeInputs: { text: string }[] = [{ text: '' }];

  constructor(private storage:Storage, private router:Router) { }

   async ionViewWillEnter(){
    console.log("ionviewWillEnter HistPage");
    await this.storage.create();
    this.gratitudeInputs = await this.storage.get("history");
  } 

  ngOnInit() {
  }

}
