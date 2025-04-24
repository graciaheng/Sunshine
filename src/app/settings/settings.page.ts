import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { IonAlert, IonInput, IonLabel, IonList,
  IonItem, IonRadio, IonRadioGroup, IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonAlert, IonInput, IonLabel, IonList,
    IonItem, IonRadio, IonRadioGroup, IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {
  username:string = "";
  password:string = "";
  email:string = "";

  constructor(private storage:Storage, private router:Router) { }

  async ionViewWillEnter(){
    await this.storage.create();
    this.username = await this.storage.get('username');
    this.password = await this.storage.get('password');
    this.email = await this.storage.get('email');
  }
  
  async onClickSaveDetails(){
    await this.storage.create();
    await this.storage.set('username', this.username);
    await this.storage.set('password', this.password);
    await this.storage.set('email', this.email);
    this.router.navigate(['/home'])
  }

  ngOnInit() {
  }

}
