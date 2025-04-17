import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonFab, IonFabButton, IonIcon, IonInput, IonItem, IonList, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular'; //for storing the gratitude inputs
import { Router } from '@angular/router';
import { addIcons } from 'ionicons'; //for the add button
import { add } from 'ionicons/icons'; //for the add button

@Component({
  selector: 'app-gratitude',
  templateUrl: './gratitude.page.html',
  styleUrls: ['./gratitude.page.scss'],
  standalone: true,
  imports: [IonButton, IonFab, IonFabButton, IonIcon, 
    IonInput, IonItem, IonList, IonButtons, IonBackButton, 
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GratitudePage implements OnInit {
  gratitudeInputs: { text: string }[] = [{ text: '' }]; //array to hold inputs, at least one should appear

  constructor(private storage:Storage, private router:Router) { 

    addIcons({ add });
  }

  // Add a new input when the button is clicked
  addGratitude() {
    console.log("aaaaaa")
    this.gratitudeInputs.push({ text: '' }); // Add a new input object with empty text
  }

  async ionViewWillEnter(){
    console.log("ionviewWillEnter");
    await this.storage.create();
    //check if the array is 'null'
    if(this.gratitudeInputs.length > 1)
     this.gratitudeInputs = await this.storage.get("history");
    }

  async onDoneButtonClicked(){
    console.log("hdgsahd")
    console.log(this.gratitudeInputs);
    await this.storage.create();
    await this.storage.set("history", this.gratitudeInputs);
    this.router.navigate(['/history']);
  } 

  ngOnInit() {
  }

}
