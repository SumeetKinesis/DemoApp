import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Reactive } from "../reactive/reactive";
import { elementAt } from 'rxjs';
import { Product } from '../models/model';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, Reactive],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home {
  @ViewChild('f') signupForm!: NgForm;
  reactive = false;
  data = [
    { name: "Sumeet", Profession: "Software" },
    { name: "Ameet", Profession: "Developer" }
  ]
  constructor() {
    // this.getData();
    this.findDifferentOne();
  }

  submit() {
    console.log('submitted', this.signupForm);
    this.createData({ name: "Adarsh", Profession: "Audit" }).then((res) => {
      this.getData();
    }).then(res => console.log('New Then')).catch(err => console.log(err));
  }

  getData() {
    console.log('Get Data');
    setTimeout(() => {
      let output = "";
      this.data.forEach((data, index) => {
        output += `<li>${data.name}</li>`;
      })
      document.body.innerHTML = output;
    }, 1000);
  }

  createData(newData: any) {
    console.log('create Data');
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        this.data.push(newData);
        let error = false;
        if (!error) {
          resolve();
        } else {
          reject('Error');
        }
      }, 2000);
    });
  }



  arr1 = [1,2,3,4,5,6,7];
  arr2 = [1,2,3,0,5,6,7];

  findDifferentOne() {
    const index = this.arr1.findIndex((value, index) => {
      return value !== this.arr2[index];
    });
    console.log('Index', index);
    console.log('Value', this.arr2[index]);
    console.log('This', this);
  }

  hideShow() {
    this.reactive = !this.reactive;
    console.log('reactive', this.reactive);
  }

  changes() {
    console.log('chnages', this.signupForm);
  }


  //New Task with type and interface
  products: Array<Product> = [
    {
      id: 1,
      name: 'Smartphone',
      price: 2999,
      category: 'electronics',
      status: 'in-stock',
      description: 'none',
      image: 'https://www.pexels.com/photo/fighter-planes-in-the-sky-12719607/'
    },
    {
      id: 2,
      name: 'Shirt',
      price: 2999,
      category: 'fashion',
      status: 'out-of-stocks',
      description: 'none',
      image: 'https://pixabay.com/illustrations/tshirt-shirt-t-shirt-fashion-man-8726716/',
    }

  ];

  inStock(id: number, newStatus: any) {
    console.log('InStock', id, newStatus);
   const productId = this.products.find((t) => t.id === id);
   if(productId) {
    productId.status = newStatus;
   } 
  }

  outOfStock(id: number, newStatus: any) {
    console.log('out of stock', id, newStatus);
   const productId = this.products.find((t) => t.id === id);
   if(productId) {
    productId.status = newStatus;
   } 
  }

  preOrder(id: number, newStatus: any) {
    console.log('pre Order', id, newStatus);
   const productId = this.products.find((t) => t.id === id);
   if(productId) {
    productId.status = newStatus;
   } 
  }
}

