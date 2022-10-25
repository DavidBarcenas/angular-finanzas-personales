import { Component, OnDestroy } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy {
  title = '';
  subscriber: Subscription;

  constructor(private router: Router) {
    this.subscriber = this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        this.title = e['url'] === '/registro' ? 'Crea tu cuenta' : 'Iniciar Sesión';
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
