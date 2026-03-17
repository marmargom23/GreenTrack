import { Component, OnInit } from '@angular/core';
import { RecomendacionesService } from '../../services/recomendaciones.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recomendaciones',
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
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.scss'],
})
export class RecomendacionesComponent implements OnInit {
  recs: any[] = [];
  texto = '';

  displayedColumns = ['fecha', 'mensaje'];

  constructor(
    private recService: RecomendacionesService,
    private snack: MatSnackBar,
  ) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.recService.getRecomendaciones().subscribe((data) => {
      this.recs = data;
    });
  }

  handleSubmit() {
    const payload = {
      mensaje: this.texto,
    };

    this.recService.addRecomendacion(payload).subscribe(() => {
      this.snack.open('Recomendación añadida', 'OK', { duration: 2000 });
      this.texto = '';
      this.cargar();
    });
  }
}
