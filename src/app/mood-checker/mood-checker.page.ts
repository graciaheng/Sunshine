import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import {  IonLabel, IonList,
  IonItem, IonRadio, IonRadioGroup, IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mood-checker',
  templateUrl: './mood-checker.page.html',
  styleUrls: ['./mood-checker.page.scss'],
  standalone: true,
  imports: [ IonLabel,IonList,
    IonItem, IonRadio, IonRadioGroup, IonButton, 
    IonButtons, IonBackButton, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoodCheckerPage implements OnInit {
  status:string = "";
  backgroundColor: string = '#ffffff'; // Default background

  constructor(private storage:Storage, private router:Router) {
  }

  async ionViewWillEnter(){
  console.log("ionviewWillEnter");
  await this.storage.create();
  this.status = await this.storage.get('status');
  }

  async onButtonClick(){
    const moodColors: { [key: string]: string } = {
      Joy: '#FFF59D',      // Light yellow
      Meh: '#90CAF9',        // Light blue
      Anxiety: '#FFAB91',  // Bright orange
      Frustrated: '#BCAAA4'        // Soft brown/grey
    };
    this.backgroundColor = moodColors[this.status] || '#ffffff';

  console.log(this.status);
  await this.storage.create();
  await this.storage.set('status', this.status);
  this.router.navigate(['/home']);
  }

  ngOnInit() {
  }
 
}
