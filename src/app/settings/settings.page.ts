import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { IonInput, IonLabel, IonList,
  IonItem, IonRadio, IonRadioGroup, IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonInput, IonLabel, IonList,
    IonItem, IonRadio, IonRadioGroup, IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {
  username:string = "";

  constructor(private storage:Storage, private router:Router) { }

  async ionViewWillEnter(){
    console.log("ionviewWillEnter username");
    await this.storage.create();
    this.username = await this.storage.get('username');
  }
  
  async onClickSaveDetails(){
    console.log(this.username);
    await this.storage.create();
    await this.storage.set('username', this.username);
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
