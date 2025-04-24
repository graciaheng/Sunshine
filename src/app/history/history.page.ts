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
  gratitudeInputs: { text: string; date?: string }[] = [{ text: '' }]; //with date of entry
  groupedGratitudes: { date: string, entries: string[] }[] = []; //group same date entries together

  constructor(private storage:Storage, private router:Router) { }

   async ionViewWillEnter(){
    await this.storage.create();
    const rawGratitudes = await this.storage.get('history') || []; 

    const grouped: { [date: string]: string[] } = {}; //saves keys as dates, values as arrays of gratitude texts

  rawGratitudes.forEach((entry: { date: string | number | Date; text: string; }) => { //loops through each entry
    const dateOnly = new Date(entry.date).toDateString();
    if (!grouped[dateOnly]) {
      grouped[dateOnly] = [];
    }
    grouped[dateOnly].push(entry.text);
  });

  this.groupedGratitudes = Object.entries(grouped).map(([date, entries]) => ({
    date,
    entries
  }));
  } 

  ngOnInit() {
    
  }

}
