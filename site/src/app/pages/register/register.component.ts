import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  nombre = '';
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private snack: MatSnackBar,
  ) {}

  handleSubmit() {
    this.auth
      .registerRequest(this.nombre, this.email, this.password)
      .subscribe({
        next: () => {
          this.snack.open('Usuario registrado correctamente', 'Cerrar', {
            duration: 2000,
          });
          this.router.navigate(['/login']);
        },
        error: () => {
          this.snack.open('Error al registrar usuario', 'Cerrar', {
            duration: 2000,
          });
        },
      });
  }
  goLogin() {
    this.router.navigate(['/login']);
  }
}
