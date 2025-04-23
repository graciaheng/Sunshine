import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { IonBackButton, IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonButtons, IonMenuButton, IonLabel, IonList, IonMenu,
  IonMenuToggle, IonButton, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-sleep-helper',
  templateUrl: './sleep-helper.page.html',
  styleUrls: ['./sleep-helper.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonButtons, IonMenuButton, IonLabel, IonList, IonMenu,
    IonMenuToggle, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule]
})
export class SleepHelperPage implements OnInit {

  constructor(private router:Router) { }

  async openVideo1() {
    await Browser.open({url: 'https://www.youtube.com/watch?v=aEqlQvczMJQ'});
  };

  async openVideo2() {
    await Browser.open({url: 'https://www.youtube.com/watch?v=dpEGwJ6Iw0A'});
  };

  async openVideo3() {
    await Browser.open({url: 'https://www.youtube.com/watch?v=aqVRFEk5vao'});
  };

  async openVideo4() {
    await Browser.open({url: 'https://www.youtube.com/watch?v=lh4JdZTJe7k'});
  };

  ngOnInit() {
  }

}
