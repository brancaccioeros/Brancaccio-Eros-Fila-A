import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {secondComponent} from './second/second';
import {thirdComponent} from './third/third';
import {fourthComponent} from './fourth/fourth';

@Component({
  selector: 'app-root',
  standalone: true;
  imports: [RouterOutlet, secondComponent, thirdComponent, fourthComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 tuo_nome: string='app';
}
