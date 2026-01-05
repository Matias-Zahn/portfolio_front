import { Component } from '@angular/core';
import { BACKEND_PROJECTS } from '../../data/proyect.data';

@Component({
  selector: 'app-proyects.component',
  imports: [],
  templateUrl: './proyects.component.html',
})
export class ProyectsComponent { 

  public proyects = BACKEND_PROJECTS

}
