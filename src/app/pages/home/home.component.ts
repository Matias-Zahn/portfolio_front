import { Component, HostBinding } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent { 
  @HostBinding('class') class = 'flex-1 flex flex-col';
}
