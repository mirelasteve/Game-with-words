import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponent } from './shared/shared.component';
import { GuessTheWordComponent } from './shared/guess-the-word/guess-the-word.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './shared/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    GuessTheWordComponent,
    SharedComponent,
    NavigationComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpModule,
      HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
