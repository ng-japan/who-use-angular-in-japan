import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';

const modules = [MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
