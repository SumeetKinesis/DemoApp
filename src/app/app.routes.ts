import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Reactive } from './pages/reactive/reactive';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'reactive-form',
        component: Reactive
    }
];
