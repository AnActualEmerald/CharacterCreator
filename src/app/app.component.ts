import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CharacterCreator';
  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore){
    console.log('loaded lol');
  }
}
