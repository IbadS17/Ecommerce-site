import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = `http://localhost:5052`;

  cartitems: any[] = [];
  totalitemofcart: Subject<number> = new Subject<number>();
  totalprice: Subject<number> = new Subject<number>();
  address: any[] = [];

  constructor(private httpClient: HttpClient) {
    // Load the cart items from localStorage on initialization
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartitems = JSON.parse(storedCartItems);
    }
    // Emit the initial count
    this.totalitemofcart.next(this.cartitems.length);
    this.calculateTotalPrice(); // Calculate the total price on initialization
  }

  additemtocart(theitem: any): boolean {
    let alreadyExist = false;
    let existitem: any;

    if (this.cartitems.length > 0) {
      for (let temp of this.cartitems) {
        if (temp.id === theitem.id) {
          existitem = temp;
          break;
        }
      }
    }

    alreadyExist = existitem != null;
    if (alreadyExist) {
      existitem.quantity++;
      console.log(existitem);
    } else {
      this.cartitems.push(theitem);
    }

    // Store the updated cart in localStorage and update total
    localStorage.setItem('cartItems', JSON.stringify(this.cartitems));
    this.totalitemofcart.next(this.cartitems.length);
    this.calculateTotalPrice(); // Update the total price after adding the item

    return !alreadyExist;
  }

  gettotalitem() {
    this.totalitemofcart.next(this.cartitems.length);
    return this.cartitems;
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    for (let temp of this.cartitems) {
      totalPrice += temp.price * temp.quantity;
    }
    this.totalprice.next(totalPrice);
  }

  gettotalcount() {
    this.calculateTotalPrice();
  }

  getCountry() {
    return this.httpClient.get(`${this.baseUrl}/country/`);
  }

  getStateByCountryId(id: any) {
    return this.httpClient.get(`${this.baseUrl}/country/states/${id}`);
  }

  saveaddress(address: any) {
    this.address = address;
    console.log(this.address);
  }

  getaddress() {
    return this.address;
  }

  getCartItem() {
    return this.cartitems;
  }

  setcartItem(cartitem: any) {
    this.cartitems = cartitem;
    localStorage.setItem('cartItems', JSON.stringify(this.cartitems));
    this.totalitemofcart.next(this.cartitems.length);
    this.calculateTotalPrice(); // Update the total price when setting cart items
  }

  saveOrder(order: any) {
    return this.httpClient.post(`${this.baseUrl}/order/`, order);
  }
}
