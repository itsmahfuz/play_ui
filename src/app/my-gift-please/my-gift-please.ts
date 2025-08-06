import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';
import {EmailGeneratorService} from '../service/email-generator.service';

@Component({
  selector: 'app-my-gift-please',
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './my-gift-please.html',
  styleUrl: './my-gift-please.scss'
})
export class MyGiftPlease implements OnInit {

  frmGroup: FormGroup;
  fb = inject(FormBuilder);
  emailService = inject(EmailGeneratorService);
  router = inject(Router);

  ngOnInit(): void {
    this.frmGroup = this.fb.group({
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      userThought: ['', Validators.required],
    })
  }

  saveUser() {
    let payload = {...this.frmGroup.value};
    payload.currentExp = 'Experience_1'
    this.emailService.createUser(payload).subscribe(response => {
      console.log(response);
      this.router.navigate(['send-me']);
    })
  }


}
