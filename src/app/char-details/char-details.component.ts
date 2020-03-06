import { Component, OnInit } from '@angular/core';
import { CharServiceService } from '../char-service.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/character';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.scss']
})
export class CharDetailsComponent implements OnInit {

  character: Character;

  constructor(private cs: CharServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(d => {
      let name = d.get('name');
      this.cs.getCharacter(name).subscribe(c => {
        if(c.length > 1 || !c.length){
          console.error(`Something's up with the character I got: ${c}`);
        }
        this.character = c[0];
      });
    })
  }

}
