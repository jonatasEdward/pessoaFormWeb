import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-button',
  standalone: true,
  imports: [],
  templateUrl: './form-button.component.html',
  styleUrl: './form-button.component.css'
})
export class FormButtonComponent {

  @Input() label: string = "";

  alerta() {
    alert("Button: " + this.label)
  }

}
