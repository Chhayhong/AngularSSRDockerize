import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = signal<any[]>([]);

  constructor(
      private readonly meta: Meta,
      private readonly title: Title,
      private readonly route: ActivatedRoute
    ) {}
  ngOnInit() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        this.products.set(json);
      });
  }
}
