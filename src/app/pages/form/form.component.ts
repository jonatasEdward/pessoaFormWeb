import { Component } from '@angular/core';
import {FormButtonComponent} from "../../componet/form-button/form-button.component";
import {Form, FormsModule} from "@angular/forms";
import {FormService} from "../../services/form.service";
import {Pessoa} from "../../model/form";
import {Router} from "@angular/router";
import {FormHttpService} from "../../services/form-http.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormButtonComponent,
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  styleH2: string = 'font-family: "Arial Black";'
  button: string = 'Click 1'
  button2: string = 'Click 2'
  pessoa: Pessoa = {
    id: 0,
    nome: 'Nome',
    email: '',
    cpf: ''
  }

  constructor(private _formService: FormService,
              private _router: Router,
              private _formHttpService: FormHttpService) {
  }

  onSubmit() {
    console.log(this.pessoa);
    // this._formService.addPesssoa(this.pessoa);
    // this._router.navigate(['/form-table']);
    this.addPesssoa()
  }

  addPesssoa() {
    this._formHttpService.addPesssoa(this.pessoa)
      .subscribe({
        next: (valeu) => {
          this._router.navigate(['/form-table'])
        }, error: (err) => {
          console.error("Falha ao adicionar pessoa", err)
          alert("Falha ao adicionar pessoa")
        }
      });
  }
}
