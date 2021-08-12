import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

const MATERIAL = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatDividerModule,
  MatTableModule
];

@NgModule({
  imports: [MATERIAL],
  exports: [MATERIAL]
})
export class MaterialModule { }
