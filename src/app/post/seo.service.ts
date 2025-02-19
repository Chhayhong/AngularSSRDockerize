import { isPlatformServer } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, makeStateKey, PLATFORM_ID, TransferState } from "@angular/core";

const SEO_DATA_KEY = makeStateKey<any>('seoData'); // Define a unique key

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private http: HttpClient,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getSeoData(productId: string) {
    const cachedData = this.transferState.get(SEO_DATA_KEY, null);
    if (cachedData && cachedData.id === productId) {
      return Promise.resolve(cachedData); // Return cached data on client
    }

    return this.http.get(`https://fakestoreapi.com/products/${productId}`).toPromise().then(data => {
      if (isPlatformServer(this.platformId)) {
        this.transferState.set(SEO_DATA_KEY, data); // Store data for client
        // console.log(data);
      }
      return data;
    });
  }
}
