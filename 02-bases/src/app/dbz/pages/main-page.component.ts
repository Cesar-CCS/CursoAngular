import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { DbzService } from '../services/dbz.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  /*En el constructor defino propiedades privadas y
  tambien injeccion de dependencias*/
  constructor(
    private dbzService: DbzService
  ){

  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    return this.dbzService.deleteCharacterById(id);
  }
}
