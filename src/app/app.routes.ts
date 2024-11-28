import { Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path: 'home', component: CuerpoComponent },
  { path: 'footer', component: FooterComponent },
];
