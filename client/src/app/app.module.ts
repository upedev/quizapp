import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import {RouterModule}  from '@angular/router'
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatCardModule, MatRadioModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {appRoutes} from './routes';
import { ExamsComponent } from './exams/exams.component';
import { TilesComponent } from './tiles/tiles.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    NavbarComponent,
    HomeComponent,
    ExamsComponent,
    TilesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
