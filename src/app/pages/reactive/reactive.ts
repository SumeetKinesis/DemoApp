import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [FormsModule, CommonModule],
  templateUrl: './reactive.html',
  styleUrl: './reactive.scss'
})
export class Reactive {
  radio = ['male', 'female'];

  constructor(private fb: FormBuilder) {

  }

}
