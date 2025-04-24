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

  async openSleepVideo1() {
    await Browser.open({url: 'https://www.youtube.com/watch?v=aEqlQvczMJQ'});
  };

  async openSleepVideo2() {
    await Browser.open({url: 'https://www.youtube.com/watch?v=aqVRFEk5vao'});
  };

  async openSleepVideo3() {
    await Browser.open({url: 'https://www.youtube.com/watch?v=lh4JdZTJe7k'});
  };

  async openSleepVideo4() {
    await Browser.open({url: 'https://www.youtube.com/watch?v=D8eplSV1wus'});
  };

  async openSleepVideo5() {
    await Browser.open({url: 'https://www.youtube.com/watch?v=73Zm9VMa1N0'});
  };

  ngOnInit() {
  }

}
