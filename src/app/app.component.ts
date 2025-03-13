import { Component } from '@angular/core';  

export interface IProduct {  
  name: string;  
  price: number;  
}  

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.scss']  
})  
export class AppComponent {  
  Products: IProduct[] = [];  

  addProduct(productName: string, productPrice: string) {  
    const price = parseFloat(productPrice);  
    
    if (productName.trim() && !isNaN(price)) {  
      this.Products.push({  
        name: productName,  
        price: price  
      });  
    }  
  }  

  deleteProduct(productIndex: number) {  
    this.Products = this.Products.filter((_, index) => index !== productIndex);  
  }  
}  
