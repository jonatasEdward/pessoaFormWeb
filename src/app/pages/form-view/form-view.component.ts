import {Component, OnInit} from '@angular/core';
import {Pessoa} from "../../model/form";
import {FormService} from "../../services/form.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormHttpService} from "../../services/form-http.service";

@Component({
  selector: 'app-form-view',
  standalone: true,
  imports: [],
  templateUrl: './form-view.component.html',
  styleUrl: './form-view.component.css'
})
export class FormViewComponent implements OnInit {

  pessoa: any;


  constructor(private _formService: FormService,
              private _formHttpService: FormHttpService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id: string | null = this._activatedRoute.snapshot.paramMap.get('id');
    if (id === null || id === undefined) {
      alert("Escolha um usuario!");
      this.voltar()
    }
    if (typeof id === "string") {
      // this.pessoa = this._formService.getById(Number.parseInt(id));

      this._formHttpService.getById(Number.parseInt(id))
        .subscribe({
          next: (data: Pessoa) => {
            this.pessoa = data
          },
          error: err => {
            alert("Usuario não encontrado");
            this.voltar()
          }
    })


    }
  }

  validateId(id: number) {

  }
  voltar() {
    this._router.navigate(['/form-table']);
  }
}
