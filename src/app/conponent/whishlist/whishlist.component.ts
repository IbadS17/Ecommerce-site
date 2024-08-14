import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { WhishlistService } from 'src/app/service/whishlist.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css'],
})
export class WhishlistComponent implements OnInit {
  whishlist = [
    {
      title: 's',
    },
  ];

  totalitemofwhislist = 0;
  constructor(
    private whishlistService: WhishlistService,
    private cartServcie: CartService
  ) {}

  ngOnInit(): void {
    this.whishlist = this.whishlistService.getWhishlist();
    console.log(this.whishlist);

    this.totalitemofwhislist = this.whishlistService.getWhishlist().length;
  }
  deleteitemthis(temp: any) {
    this.whishlistService.deleteitemFromWhishlist(temp);
    this.whishlist = this.whishlistService.getWhishlist();
    this.totalitemofwhislist = this.whishlistService.getWhishlist().length;
  }

  additemtocart(temp: any) {
    temp.quantity++;
    this.cartServcie.additemtocart(temp);
    this.whishlistService.deleteitemFromWhishlist(temp);
    this.whishlist = this.whishlistService.getWhishlist();
    this.totalitemofwhislist = this.whishlistService.getWhishlist().length;
    this.cartServcie.gettotalitem();
  }
}
