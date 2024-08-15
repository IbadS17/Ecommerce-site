import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';
import { WhishlistService } from 'src/app/service/whishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  MainCat = [
    {
      id: 1,
      name: 'course1',
      level: 1,
      parentCourseCategory: null,
    },
  ];
  totalWhislistItem = 0;
  totalCartItem = 0;

  constructor(
    private categoryService: CategoryService,
    private whishlistService: WhishlistService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.categoryService.getMainCategory(1).subscribe(
      (data: any) => {
        this.MainCat = data;
        console.log(this.MainCat);
      },
      (error) => {
        console.log(error);
      }
    );

    // Wishlist Tracker
    this.whishlistService.totalWhishListItem.subscribe((data: any) => {
      this.totalWhislistItem = data;
    });

    // Cart Tracker
    this.cartService.totalitemofcart.subscribe((data: any) => {
      this.totalCartItem = data;
    });

    // Manually trigger the emission of the initial cart item count
    this.cartService.totalitemofcart.next(
      this.cartService.getCartItem().length
    );
  }

  testerSearch(va: any) {
    console.log(va);
  }
}
