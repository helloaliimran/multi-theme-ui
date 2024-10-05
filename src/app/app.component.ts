import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FlexLayoutModule
    , MatButtonModule
    , MatIconModule
    , MatRadioModule
    , FormsModule
    , MatSelectModule
    , MatFormFieldModule
    , MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multi-theme-ui';
  favoriteColor: string = "dark";
  theme = 'dark-theme';
  

  myColors: any = [
    { value: 'dark-theme', viewValue: 'dark' },
    { value: 'light-theme', viewValue: 'light' },
    { value: 'light-rose-theme', viewValue: 'light-rose' },
    { value: 'dark-rose-theme', viewValue: 'dark-rose' },
  ];

  toggleTheme() {

    const body = document.body;

    if (body.classList.contains(this.theme)) {
      body.classList.remove(this.theme);
    }

    this.theme = this.favoriteColor;
    body.classList.add(this.theme);
  }
}
