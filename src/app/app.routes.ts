import { Routes } from '@angular/router';
import {Landing} from './landing/landing';
import {LetsGo} from './lets-go/lets-go';
import {AmGood} from './am-good/am-good';
import {PlayNow} from './play-now/play-now';
import {KeepGoing} from './keep-going/keep-going';
import {InputBoxForReflection} from './input-box-for-reflection/input-box-for-reflection.component';
import {MyGiftPlease} from './my-gift-please/my-gift-please';
import {SendMeExperience} from './send-me-experience/send-me-experience';
import {SendMeTheLink} from './send-me-the-link/send-me-the-link';
import {Confirmation} from './confirmation/confirmation';

export const routes: Routes = [
  {path: '', pathMatch: "full", component: LetsGo},
  {path: 'landing', pathMatch: "full", component: Landing},
  // {path: 'lets-go', component: LetsGo},
  {path: 'am-good', component: AmGood},
  {path: 'play-now', component: PlayNow},
  {path: 'keep-going', component: KeepGoing},
  {path: 'box-for-reflection', component: InputBoxForReflection},
  {path: 'my-gift', component: MyGiftPlease},
  {path: 'send-me', component: SendMeExperience},
  {path: 'send-link', component: SendMeTheLink},
  {path: 'confirmation', component: Confirmation},
];
