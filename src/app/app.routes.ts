import { Routes } from '@angular/router';
import { AboutComponent, ContactComponent, HomeComponent, ProyectsComponent, SkillsComponent } from './pages';



export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'projects',
        component: ProyectsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
];
