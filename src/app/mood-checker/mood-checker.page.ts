import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import {  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonLabel, IonList,
  IonItem, IonRadio, IonRadioGroup, IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mood-checker',
  templateUrl: './mood-checker.page.html',
  styleUrls: ['./mood-checker.page.scss'],
  standalone: true,
  imports: [ IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonLabel,IonList,
    IonItem, IonRadio, IonRadioGroup, IonButton, 
    IonButtons, IonBackButton, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoodCheckerPage implements OnInit {
  status:string = "";
  moodColor: string = ''; //default background

  constructor(private storage:Storage, private router:Router) {
  }

  async ionViewWillEnter(){
  console.log("ionviewWillEnter");
  await this.storage.create();
  this.status = await this.storage.get('status');
  this.moodColor = await this.storage.get('moodColor') || '';
  }

  async onButtonClick(){
    const moodColors: { [key: string]: string } = {
      Joy: 'mood-joy',
      Emotional: 'mood-emotional',
      Meh: 'mood-meh',
      Anxiety: 'mood-anxiety',
      Frustrated: 'mood-frustrated',
      Calm: 'mood-calm'
    };

  this.moodColor = moodColors[this.status] || '';

  console.log(this.status);
  await this.storage.create();
  await this.storage.set('status', this.status);
  await this.storage.set('moodColor', this.moodColor);
  //this.router.navigate(['/home']);
  }

  ngOnInit() {
  }
 
}
