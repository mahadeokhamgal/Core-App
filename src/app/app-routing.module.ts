import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'account/login', component: LoginComponent },
//   { path: 'account/register', component: RegisterComponent },

//   // otherwise redirect to home
//   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
