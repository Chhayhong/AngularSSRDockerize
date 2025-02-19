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
        this.updateMeta();
      });
  }
  updateMeta() {
    if(!this.selectedProduct()){
      this.title.setTitle('Loading...')
      return;
    }
    this.title.setTitle(this.selectedProduct()?.title ?? 'error'); // Set the title tag

    this.meta.addTag({
      name: 'description',
      content: this.selectedProduct()?.description ?? 'error',
    });
    this.meta.addTag({
      property: 'og:title',
      content: this.selectedProduct()?.title ?? 'error',
    }); // Open Graph tag
    this.meta.addTag({
      property: 'og:description',
      content: this.selectedProduct()?.description ?? 'error',
    });
    this.meta.addTag({
      property: 'og:image',
      content:
        this.selectedProduct()?.image ?? 'error',
    }); // Open Graph image
    // ... other meta tags
  }
}
