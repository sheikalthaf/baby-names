import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  users: any[] = [];
  page = 1;
  maxPage = 4;

  constructor(private http: HttpClient) {
    this.getUser();
  }

  ngOnInit() {
    console.log('test Message');
  }

  trackByIdentity(index: number, item: { id: { value: string } }) {
    return item.id.value;
  }

  getUser(infiniteScroll?: IonInfiniteScroll) {
    this.http
      .get<any>(`https://randomuser.me/api/?results=20&page=${this.page}`)
      .subscribe(user => {
        this.users = [...this.users, ...user.results];
        if (infiniteScroll) {
          infiniteScroll.complete();
        }
      });
  }

  loadMore(infiniteScroll: CustomEvent<IonInfiniteScroll>) {
    if (this.page > this.maxPage - 1) return;

    this.page++;
    this.getUser((infiniteScroll.target as unknown) as IonInfiniteScroll);
  }
}
