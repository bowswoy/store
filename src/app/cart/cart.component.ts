import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  checkoutForm: any;

  constructor(
    private cartService: CartService,
    private fromBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.fromBuilder.group({
      name: '',
      address: ''
    })
  }

  onSubmit(customerData: any) {
    console.log('sasa', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
