import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-my-gift-please',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './my-gift-please.html',
  styleUrl: './my-gift-please.scss'
})
export class MyGiftPlease implements OnInit {

  frmGroup: FormGroup;
  fb = inject(FormBuilder);

    ngOnInit(): void {
        this.frmGroup = this.fb.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          thought: ['', Validators.required],
        })
    }



}
