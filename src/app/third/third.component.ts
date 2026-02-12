import { Component } from '@angular/core';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  brancaccio = {
    app: 'app',
    secondo: 'secondo',
    terzo: 'terzo',
    quarto: 'quarto'
  };
}