import { Component, OnInit } from '@angular/core';
import { ObjetivosService } from '../../services/objetivos.service';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-objetivos',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.scss'],
})
export class ObjetivosComponent implements OnInit {
  objetivos: any[] = [];

  form = { mes: '', anio: '', limiteKwh: '' };

  displayedColumns = ['mes', 'anio', 'limiteKwh'];

  constructor(
    private objetivosService: ObjetivosService,
    private snack: MatSnackBar,
  ) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.objetivosService.getObjetivos().subscribe((data) => {
      this.objetivos = data;
    });
  }

  handleSubmit() {
    const payload = {
      mes: Number(this.form.mes),
      anio: Number(this.form.anio),
      limiteKwh: Number(this.form.limiteKwh),
    };

    this.objetivosService.addObjetivo(payload).subscribe(() => {
      this.snack.open('Objetivo guardado', 'OK', { duration: 2000 });
      this.form = { mes: '', anio: '', limiteKwh: '' };
      this.cargar();
    });
  }
}
