import { Routes } from '@angular/router';

import {QuestionsComponent} from './questions/questions.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';

export const appRoutes : Routes = [
    {path: 'quiz', component: QuestionsComponent},
    {path: 'home', component: HomeComponent,},
    {path: '', redirectTo: 'home', pathMatch : 'full'} 
];