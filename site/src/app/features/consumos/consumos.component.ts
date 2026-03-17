import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../../services/consumo.service';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consumos',
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
  templateUrl: './consumos.component.html',
  styleUrls: ['./consumos.component.scss'],
})
export class ConsumosComponent implements OnInit {
  consumo: any[] = [];
  form = { mes: '', anio: '', kwh: '' };

  displayedColumns = ['mes', 'anio', 'kwh'];

  constructor(
    private consumoService: ConsumoService,
    private snack: MatSnackBar,
  ) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.consumoService.getConsumo().subscribe((data) => {
      this.consumo = data;
    });
  }

  handleSubmit() {
    const payload = {
      mes: Number(this.form.mes),
      anio: Number(this.form.anio),
      kwh: Number(this.form.kwh),
    };

    this.consumoService.addConsumo(payload).subscribe(() => {
      this.snack.open('Consumo añadido correctamente', 'OK', {
        duration: 2000,
      });
      this.form = { mes: '', anio: '', kwh: '' };
      this.cargar();
    });
  }
}
