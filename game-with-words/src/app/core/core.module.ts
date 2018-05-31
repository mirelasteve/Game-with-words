import { GuessTheWordService } from './guess-the-word.servece/guess-the-word.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequesterService } from './requester/requester.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [GuessTheWordService,
    RequesterService],
  declarations: []
})
export class CoreModule { }
