import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhishlistService {
  whishlist: any[] = [];
  totalWhishListItem: Subject<number> = new Subject<number>();

  constructor() {
    // Load the wishlist items from localStorage on initialization
    const storedWhishlistItems = localStorage.getItem('whishlistItems');
    if (storedWhishlistItems) {
      this.whishlist = JSON.parse(storedWhishlistItems);
    }
    // Emit the initial count
    this.totalWhishListItem.next(this.whishlist.length);
  }

  addtowhishlist(theitem: any): boolean {
    let alreadyExist = false;
    let existitem: any;

    if (this.whishlist.length > 0) {
      for (let temp of this.whishlist) {
        if (temp.id === theitem.id) {
          existitem = temp;
          break;
        }
      }
    }

    alreadyExist = existitem != null;
    if (alreadyExist) {
      console.log('already added in wishlist');
      return false;
    } else {
      this.whishlist.push(theitem);

      // Store the updated wishlist in localStorage and update total
      localStorage.setItem('whishlistItems', JSON.stringify(this.whishlist));
      this.totalWhishListItem.next(this.whishlist.length);

      return true;
    }
  }

  getWhislist() {
    this.totalWhishListItem.next(this.whishlist.length);
    return this.whishlist;
  }

  deleteitemFromWhistlist(theitem: any) {
    let newWhishlist = [];
    for (let temp of this.whishlist) {
      if (temp.id != theitem.id) {
        newWhishlist.push(temp);
      }
    }

    this.whishlist = newWhishlist;

    // Update the wishlist in localStorage and emit the updated count
    localStorage.setItem('whishlistItems', JSON.stringify(this.whishlist));
    this.totalWhishListItem.next(this.whishlist.length);
  }
}
