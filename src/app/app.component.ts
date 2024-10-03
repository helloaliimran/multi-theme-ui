import { Component } from '@angular/core';
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FlexLayoutModule,MatButtonModule,MatIconModule,MatRadioModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multi-theme-ui';
  favoriteColor: string="dark";
  theme = 'dark-theme';
  colors:string[] = ['dark','light'];

  toggleTheme(){
    this.favoriteColor
    const body = document.body;

    if (body.classList.contains(this.theme)) {
      body.classList.remove(this.theme);
      }

    this.theme = this.favoriteColor === 'light' ? 'light-theme' : 'dark-theme';
   

  // Add the new class
  body.classList.add(this.theme);
  }
}
