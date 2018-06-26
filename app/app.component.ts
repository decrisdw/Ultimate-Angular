import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  styles: ['.nav {margin: 0 0 10px;padding: 0 0 20px;border-bottom: 1px solid #dce5f2;}',
          '.nav a { background: #3a4250; color: #fff; padding: 4px 10px; margin: 0 2px; border-radius: 2px;}',
          '.nav a.active {color: #b690f1;background: #363c48;}'],
  template: `
    <div class="app">
      <nav class="nav">
        <a 
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.exact }">
          {{ item.name }}
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
  ];
}