import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Simple filter';

  searchText: string;

  data = [
    'Aayla Secura',
    'Adi Gallia',
    'Admiral Dodd Rancit',
    'Admiral Firmus Piett',
    'Admiral Gial Ackbar',
    'Admiral Ozzel',
    'Admiral Raddus',
    'Admiral Terrinald Screed',
    'Admiral Trench',
    'Admiral U.O. Statura',
    'Agen Kolar',
  ];
}
