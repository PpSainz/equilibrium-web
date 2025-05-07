import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Equilibrium - Mental Health Support for Students'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us - Equilibrium'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Us - Equilibrium'
  },
  {
    path: 'team',
    component: TeamComponent,
    title: 'Our Team - Equilibrium'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
