import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-keep-going',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './keep-going.html',
  styleUrl: './keep-going.scss'
})
export class KeepGoing implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;
  isButtonDisabled = true;
  remainingTime = 10; // in seconds
  timerInterval!: any;
  showPlayFallback = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const audio = this.audioPlayerRef.nativeElement;

    audio.play().then(() => {
      console.log('Music playing...');
      this.startCountdown();
    }).catch(err => {
      console.warn('Autoplay blocked. Waiting for user interaction.', err);
      this.showPlayFallback = true;
    });

    audio.onended = () => {
      console.log('Music ended');
      // Optionally enable button early if music ends first
      // this.isButtonDisabled = false;
    };
  }

  startCountdown() {
    this.timerInterval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        this.isButtonDisabled = false;
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  playAudioManually() {
    const audio = this.audioPlayerRef.nativeElement;
    audio.play().then(() => {
      this.showPlayFallback = false;
      this.startCountdown();
    });
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }


}
