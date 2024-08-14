import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhishlistService {
  private wishlist: any[] = [];

  totalWhishListItem: Subject<number> = new Subject<number>();

  constructor() {
    // Load the wishlist from localStorage on initialization
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      this.wishlist = JSON.parse(storedWishlist);
      this.totalWhishListItem.next(this.wishlist.length);
    }
  }

  addtowhishlist(theitem: any): boolean {
    let alreadyExist = false;
    let existitem: any;

    if (this.wishlist.length > 0) {
      for (let temp of this.wishlist) {
        if (temp.id === theitem.id) {
          existitem = temp;
          break;
        }
      }
    }
    alreadyExist = existitem != null;
    if (alreadyExist) {
      console.log('Already added in wishlist');
      return false;
    } else {
      this.wishlist.push(theitem);
      // Store the updated wishlist in localStorage
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
      this.totalWhishListItem.next(this.wishlist.length);
      return true;
    }
  }

  getWhishlist() {
    return this.wishlist;
  }

  deleteitemFromWhishlist(theitem: any) {
    this.wishlist = this.wishlist.filter((temp) => temp.id !== theitem.id);
    // Update localStorage and notify subscribers
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    this.totalWhishListItem.next(this.wishlist.length);
  }
}
