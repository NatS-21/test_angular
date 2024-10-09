import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-test-button',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './test-button.component.html',
  styleUrl: './test-button.component.css'
})
export class TestButtonComponent {
  items: any[] = [];

  constructor(private http: HttpClient) {
  }

  fetchData() {
    this.http.get<any[]>('http://localhost:8000/api/items/').subscribe(data => {
        this.items = data;
    })
  }
}
