import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/character';
import { CharServiceService } from '../char-service.service';


@Component({
  selector: 'app-char-editor',
  templateUrl: './char-editor.component.html',
  styleUrls: ['./char-editor.component.scss']
})
export class CharEditorComponent implements OnInit {

  @Input()currentChar: Character = {
    name: "",
    age: null,
    appearance: "",
    place: "",
    story: ""};


  constructor(private charService: CharServiceService) { }

  ngOnInit(): void {
  }

  save(): void {
    this.charService.addCharacter(this.currentChar);
    this.currentChar = {
      name: "",
      age: null,
      appearance: "",
      place: "",
      story: ""};
  }

}
