import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { GuessTheWordComponent } from './shared/guess-the-word/guess-the-word.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    GuessTheWordComponent,
    SharedComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
