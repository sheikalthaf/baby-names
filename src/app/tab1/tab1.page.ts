import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { BNames } from '../models/names';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  itemsClone: BNames[];
  items: BNames[] = [];
  users: any[] = [];

  constructor(private appService: AppService) {
    this.appService.getNames().subscribe(names => {
      this.items = names;
      this.itemsClone = [...this.items];
    });
  }

  trackByIdentity(index: number, item: BNames) {
    return item.name;
  }

  test(ev: CustomEvent) {
    const value = ev.detail.value;
    this.items = this.itemsClone.filter(e =>
      value ? e.name.toLowerCase().indexOf(value) !== -1 : true
    );
  }
}
