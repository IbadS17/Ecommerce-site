import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  desktopImages: string[] = [
    'https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/6.webp',
    'https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/2.webp',
    'https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/3.webp',
    'https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/4.webp',
    'https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/5.webp',
    'https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/1.webp',
  ];

  // images: string[] = [
  //   'https://picsum.photos/800/600?random=1',
  //   'https://picsum.photos/800/600?random=2',
  //   'https://picsum.photos/800/600?random=3',
  // ];
  currentIndex: number = 0;
  autoSlideInterval: any;

  constructor() {}

  ngOnInit(): void {
    // Start automatic sliding
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 3000);
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.desktopImages.length;
    this.resetAutoSlide();
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.desktopImages.length) %
      this.desktopImages.length;
    this.resetAutoSlide();
  }

  resetAutoSlide(): void {
    // Reset the automatic sliding interval when a manual action is taken
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 3000);
  }
}
