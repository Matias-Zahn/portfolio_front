import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuItem{
  name: string;
  path: string
}


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  menuItems: MenuItem[] = [
    {name: 'Inicio', path: ''},
    {name: 'Sobre mi', path: '/about'},
    {name: 'Skills', path: '/skills'},
    {name: 'Proyectos', path: '/projects'},
    {name: 'Contacto', path: '/contact'},
  ]


  isMobileMenuOpen = false;

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }

 }
