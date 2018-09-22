import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

const modules = [MatCardModule, MatButtonModule, MatIconModule];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
