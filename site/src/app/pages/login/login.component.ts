import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private snack: MatSnackBar,
  ) {}

  handleSubmit() {
    this.auth.loginRequest(this.email, this.password).subscribe({
      next: (data) => {
        if (data.token) {
          this.auth.login(data.token);
          this.router.navigate(['/']);
        } else {
          this.snack.open('Credenciales incorrectas', 'Cerrar', {
            duration: 2000,
          });
        }
      },
      error: () => {
        this.snack.open('Credenciales incorrectas', 'Cerrar', {
          duration: 2000,
        });
      },
    });
  }
  goRegister() {
    this.router.navigate(['/register']);
  }
}
