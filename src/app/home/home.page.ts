import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Browser } from '@capacitor/browser';
import { IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonButtons, IonMenuButton, IonLabel, IonList, IonMenu,
  IonMenuToggle, IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonButtons, IonLabel, IonList, IonMenuButton, IonMenu,
    IonMenuToggle, CommonModule, IonButton, RouterLink, 
    IonHeader, IonToolbar, IonTitle, IonContent],
})

export class HomePage implements OnInit {
  myUsername: string = "";
  myStatus:string = "";
  backgroundColor: string = '#ffffff';
  
  constructor(private storage:Storage, private dataService:DataService) {}
  quote: any[] = [];

  async ionViewWillEnter(){
    console.log("ionviewWillEnter");
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
    await this.storage.create();
    this.myUsername = await this.storage.get('username');
    }

  async ionViewDidEnter(){
    this.myUsername = await this.storage.get('username');
    }

  ngOnInit(){
    this.dataService.GetQuoteData().subscribe(
      (dataS) => {

      console.log(dataS);
      this.quote = dataS;
      
    });
    }
}
