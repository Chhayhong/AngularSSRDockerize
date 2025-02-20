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

      this.title.setTitle('QB Store - Home'); // Set the title tag
      this.meta.addTag({
        name: 'description',
        content: 'Welcome to the QB Store! Explore our wide range of products.',
      });
      this.meta.addTag({
        property: 'og:title',
        content: 'QB Store - Home',
      }); // Open Graph tag
      this.meta.addTag({
        property: 'og:description',
        content: 'Welcome to the DB Store! Explore our wide range of products.',
      });

      this.meta.addTag({
        property: 'og:image',
        content:
          'https://res.cloudinary.com/fortyfournorth/image/upload/v1710256288/The%20Look%20Company%20%28Staging%29/j2zi31lqofw1abqfrjux.jpg',
      }); 


  }
}
