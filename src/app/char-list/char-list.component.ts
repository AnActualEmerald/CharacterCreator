import { Component, OnInit } from '@angular/core';
import { Character } from 'src/character';
import { CharServiceService } from '../char-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.scss']
})
export class CharListComponent implements OnInit {

  characters: Observable<Character[]>;

  constructor(private cs: CharServiceService) { }

  ngOnInit(): void {
    this.characters = this.cs.getCharacters();
    
  }

  click(name:string): void {
    
  }

}
