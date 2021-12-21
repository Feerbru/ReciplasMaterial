import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario'
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading= false;

  constructor(private fb: FormBuilder, private _snackBar:MatSnackBar, private router:Router, private loginService: LoginService) {
    this.form = this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario : Usuario = {
      nombreUsuario : this.form.value.usuario,
      password : this.form.value.password
    }

    this.loginService.login(usuario).subscribe((data) =>{
      console.log(data);
      this.loginService.setLocalStorage(data.usuario);
      this.loadingF();
      
    }, error => {
      console.log(error);
      this.errorNav();
      this.form.reset();
    });
  }

  errorNav(){
    this._snackBar.open('Usuario o contraseña ingresado son invalidos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  loadingF(){
    this.loading= true;
    setTimeout(() => {
      
      this.router.navigate(['dashboard']);
    }, 1500);
  }

}
