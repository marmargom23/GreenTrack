import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsumoService } from '../../../services/consumo.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-consumo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './add-consumo.component.html',
  styleUrls: ['./add-consumo.component.scss'],
})
export class AddConsumoComponent {
  form = { mes: '', anio: '', kwh: '' };

  constructor(
    private consumoService: ConsumoService,
    private snack: MatSnackBar,
  ) {}

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
    });
  }
}
