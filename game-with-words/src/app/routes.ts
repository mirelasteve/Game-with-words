
import { Routes } from '@angular/router';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { GuessTheWordComponent } from './shared/guess-the-word/guess-the-word.component';
import { HomeComponent } from './shared/home/home.component';

export const appRoutes: Routes = [
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: 'guess-the-word',
    component: GuessTheWordComponent,
},
  {
      path: 'about',
      component: NavigationComponent,
  },
  {
      path: 'courses',
      component: NavigationComponent,
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];
