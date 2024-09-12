import { Routes } from '@angular/router';
import {FormComponent} from "./pages/form/form.component";
import {FormTableComponent} from "./pages/form-table/form-table.component";
import {FormViewComponent} from "./pages/form-view/form-view.component";

export const routes: Routes = [
  {path: "", redirectTo: "form", pathMatch: "full" },
  {path: "form", component: FormComponent},
  {path: "form-table", component: FormTableComponent},
  {path: "form-view/:id", component: FormViewComponent}
];
