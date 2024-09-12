import {Component, OnInit} from '@angular/core';
import {FormService} from "../../services/form.service";
import {Router} from "@angular/router";
import {Pessoa} from "../../model/form";
import {NgForOf} from "@angular/common";
import {FormHttpService} from "../../services/form-http.service";

@Component({
  selector: 'app-form-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './form-table.component.html',
  styleUrl: './form-table.component.css'
})
export class FormTableComponent implements OnInit{

  styleH2: string = 'font-family: "Arial Black";'
  // pessoasForm: Pessoa[] = this._formService.getPessoas();
  pessoasForm: Pessoa[] = [];

  constructor(private _formService: FormService,
              private _formHttpService: FormHttpService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.getPessoas();
  }

  newPessoa(){
    this._router.navigate(['/form']);
  }

  getById(id: number){
    this._router.navigate(['/form-view', id]);
  }

  alteraH2(){
    this.styleH2 = 'font-family: "Arial Black"; color: red;'
  }


  getPessoas() {
    this._formHttpService.getPessoas().subscribe({
      next: data => {this.pessoasForm = data;},
      error: err => {console.error(err);}
    })
  }

}
