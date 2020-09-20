import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ml-datatable-demo';
  dataSource = [
    {id: 1, name: 'Apple', category: 'Fruit'},
    {id: 1, name: 'Orange', category: 'Fruit'},
    {id: 1, name: 'Pineapple', category: 'Fruit'},
    {id: 1, name: 'Watermelon', category: 'Fruit'},
    {id: 1, name: 'Mandarin', category: 'Fruit'}
  ];

  constructor() {
  }
}
