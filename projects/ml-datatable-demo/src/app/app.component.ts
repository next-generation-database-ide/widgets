import {Component} from '@angular/core';
import {SettingModel} from 'ml-datatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ml-datatable-demo';
  setting: SettingModel;

  constructor() {
  }
}
