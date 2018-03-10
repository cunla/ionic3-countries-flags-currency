import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Countries, Country} from "./interface";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allItems: Array<Country> = [];
  private items: Array<Country> = [];

  constructor(public navCtrl: NavController,
              private http: HttpClient) {
    this.setItems();
  }


  setItems() {
    this.http.get('assets/countries.json').toPromise().then(
      (res: Countries) => {
        this.allItems = res.countries;
        this.items = this.allItems;
      }
    );
  }

  filterItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      val = val.toLowerCase();
      this.items = this.items.filter((item) => {
        return item.name.toLowerCase().includes(val)
          || item.nativeName.includes(val)
          || item.capital.toLowerCase().includes(val);
      });
    } else {
      this.items = this.allItems;
    }
  }

}
