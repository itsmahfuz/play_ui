import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {EmailGeneratorService} from '../service/email-generator.service';

@Component({
  selector: 'app-send-me-the-link',
  imports: [
    RouterLink
  ],
  templateUrl: './send-me-the-link.html',
  styleUrl: './send-me-the-link.scss'
})
export class SendMeTheLink {

  emailService = inject(EmailGeneratorService);
  router = inject(Router);

  generateEmail() {
    let payload: any = {
      toEmail: localStorage.getItem('toEmail')
    };
    this.emailService.generateEmail(payload).subscribe(response => {
      console.log(response)
      this.router.navigateByUrl('confirmation');
    })
  }

}
