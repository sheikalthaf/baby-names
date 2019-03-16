import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  itemsClone: { id: number; value: string }[];
  items = Array(500)
    .fill('Ionic Documentation')
    .map((v, i) => ({ id: i + 1, value: v + ' ' + (i + 1) }));
  users: any[] = [];

  constructor(private http: HttpClient) {
    this.itemsClone = [...this.items];
  }

  trackByIdentity(index: number, item: { id: number; value: string }) {
    return item.id;
  }

  test(ev: CustomEvent) {
    const value = ev.detail.value;
    this.items = this.itemsClone.filter(e =>
      value ? e.value.toLowerCase().indexOf(value) !== -1 : true
    );
  }
}
