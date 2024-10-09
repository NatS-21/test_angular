import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestButtonComponent} from './components/test-button/test-button.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestButtonComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
