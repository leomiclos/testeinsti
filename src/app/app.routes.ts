import { Routes } from '@angular/router';
import { DespesasListComponent } from './components/despesas-list/despesas-list.component';
import { DespesasFormComponent } from './components/despesas-form/despesas-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/despesas', pathMatch: 'full' },
  { path: 'despesas', component: DespesasListComponent },
  { path: 'despesas/add', component: DespesasFormComponent },
  { path: 'despesas/edit/:id', component: DespesasFormComponent }
];
