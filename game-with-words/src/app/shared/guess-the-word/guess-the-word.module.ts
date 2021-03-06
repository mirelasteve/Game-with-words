import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StarPipe } from './star.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
  ],
  declarations: [StarPipe]
})
export class Module { }
