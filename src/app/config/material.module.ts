import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const modules = [MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
