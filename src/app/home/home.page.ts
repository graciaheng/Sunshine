import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Browser } from '@capacitor/browser';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonButton, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent],
})

export class HomePage implements OnInit {
  name: string = "";
  myStatus:string = "";
  backgroundColor: string = '#ffffff';
  
  constructor(private storage:Storage, private dataService:DataService) {}
  quote: any[] = [];

  async ionViewWillEnter(){
    console.log("ionviewWillEnter");
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }

  async openBrowser() {
    await Browser.open({url: 'https://youtu.be/UtBsl3j0YRQ?si=GccJJjrtCVxJpMIi'});
  };

  ngOnInit(){
    this.dataService.GetQuoteData().subscribe(
      (dataS) => {

      console.log(dataS);
      this.quote = dataS;
      
    });
    }

}
