import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Character } from 'src/character';
import { AngularFirestoreCollection } from '@angular/fire/firestore/public_api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharServiceService {

  private characters: AngularFirestoreCollection<Character>;

  constructor(private asf: AngularFirestore) { 
    
  }

  public addCharacter(c: Character){
    console.log("Running addCharacter");
    this.characters = this.asf.collection<Character>('characters');
    this.characters.add(c).then(c => console.log(c));
  }

  public getCharacters(): Observable<Character[]>{
    console.log("Fetching Characters");
    this.characters = this.asf.collection<Character>('characters');
    return this.characters.valueChanges();
  }

  public getCharacter(name: string): Observable<Character[]>{
    console.log("Fetching Character");
    return this.asf.collection<Character>('characters', ref => ref.where("name", '==', name)).valueChanges();
  }

  public deleteCharacter(name: string) { 
    let id;
    this.asf.collection<Character>('characters', ref => ref.where("name", '==', name)).snapshotChanges().subscribe(ref => {
      id = ref[0].payload.doc.id;
    })
    if(id){
      this.asf.doc<Character>(`characters/${id}`).delete();
    }

  }

}
