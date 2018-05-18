import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationComponent,
  ],
  declarations: [HomeComponent]
})
export class SharedModule { }
