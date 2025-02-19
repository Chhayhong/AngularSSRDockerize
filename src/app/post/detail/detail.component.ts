import { CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-detail',
  imports: [CurrencyPipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  selectedProduct = signal<Product | null>(null);
  subscription: any;
  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      const productID = this.route.snapshot.paramMap.get('id');
      this.onSelectedProduct(productID as string);
      this.updateMeta();
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelectedProduct(id: string) {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        this.selectedProduct.set(json);
      });
  }
  updateMeta() {
    this.title.setTitle(this.selectedProduct()?.title ?? ''); // Set the title tag

    this.meta.addTag({
      name: 'description',
      content: this.selectedProduct()?.description ?? '',
    });
    this.meta.addTag({
      property: 'og:title',
      content: this.selectedProduct()?.title ?? '',
    }); // Open Graph tag
    this.meta.addTag({
      property: 'og:description',
      content: this.selectedProduct()?.description ?? '',
    });
    this.meta.addTag({
      property: 'og:image',
      content:
        this.selectedProduct()?.image ??
        'https://static.vecteezy.com/system/resources/previews/011/537/738/non_2x/404-file-not-found-empty-state-single-isolated-icon-with-smooth-gradient-style-free-vector.jpg',
    }); // Open Graph image
    // ... other meta tags
  }
}
