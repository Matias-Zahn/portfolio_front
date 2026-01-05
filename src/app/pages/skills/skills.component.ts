import { Component } from '@angular/core';
import { SKILLS_DATA } from '../../data/skills.data';

@Component({
  selector: 'app-skills.component',
  imports: [],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  skillCategories = SKILLS_DATA;
 }
