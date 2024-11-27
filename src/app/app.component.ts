import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuerpoComponent } from "./cuerpo/cuerpo.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { NavComponent } from "./nav/nav.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, CuerpoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curso Angular ADSO-SENA Nocturno';

}
