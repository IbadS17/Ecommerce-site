import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cartstatus',
  templateUrl: './cartstatus.component.html',
  styleUrls: ['./cartstatus.component.css'],
})
export class CartstatusComponent implements OnInit {
  constructor(private cartService: CartService) {}
  whishlist = [
    {
      id: 1,
      title: 's',
      price: 11,
      quantity: 100,
    },
  ];

  // Donation Boox Highlighter
  totalprice = 0;
  amounts = [10, 20, 50, 100];
  selectedAmount: number | null = null;

  selectAmount(amount: number): void {
    this.selectedAmount = amount;
  }

  // Close Modal Opener
  isModalOpen = false;
  itemToRemove: number | null = null;

  openModal(index: number): void {
    this.isModalOpen = true;
    this.itemToRemove = index;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.itemToRemove = null;
  }

  removeItem(): void {
    if (this.itemToRemove !== null) {
      this.whishlist.splice(this.itemToRemove, 1);
    }
    this.closeModal();
  }

  // OPen Size Selection Modal
  isSizeModalOpen = false;
  selectedSize: string | null = null;

  openSizeModal(): void {
    this.isSizeModalOpen = true;
  }

  closeSizeModal(): void {
    this.isSizeModalOpen = false;
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  confirmSize(): void {
    // Handle the size confirmation logic
    this.closeSizeModal();
    // Add additional logic here to apply the selected size to the item
  }

  // For Quantity Increase/Decrease Dropdown
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit(): void {
    this.whishlist = this.cartService.gettotalitem();
    this.cartService.totalprice.subscribe((data: any) => {
      this.totalprice = data;
      console.log(data);
    });
    this.cartService.gettotalcount();
  }
  increment(temp: any) {
    console.log(temp);
    this.cartService.additemtocart(temp);
    this.cartService.gettotalcount();
  }
}
