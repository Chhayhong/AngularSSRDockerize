import { CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../seo.service';

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
  providers:[SeoService]
})
export class DetailComponent {
  selectedProduct = signal<Product | null>(null);
  subscription: any;
  constructor(
    private seoService: SeoService, 
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    const productID = this.route.snapshot.paramMap.get('id');
    this.seoService.getSeoData(productID as string).then(seoData => {
      this.selectedProduct.set(seoData);
      this.updateMeta();
    });

    this.subscription = this.route.params.subscribe((params) => {
      // this.onSelectedProduct(productID as string);
      // this.updateMeta();
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
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
