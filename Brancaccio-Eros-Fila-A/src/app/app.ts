import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Second} from './second/second';
import {Third} from './third/third';
import {Fourth} from './fourth/fourth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Second, Third, Fourth],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 tuo_nome = 'app';
}
