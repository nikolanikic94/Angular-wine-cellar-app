import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/model/wine.model';
import { WineService } from 'src/app/wineService/wine.service';

@Component({
  selector: 'wc-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
  wines: Wine[];
  count: number;

  parameters = {
    sort: '',
    sortDirection: '',
    page: 1,
    pageSize: 5,
    filter: {
      name: '',
    },
  };

  constructor(private service: WineService) {}

  ngOnInit(): void {
    this.refreshWines();
  }

  refreshWines() {
    this.service.getAll(this.parameters).subscribe((wines) => {
      this.wines = wines.results;
      this.count = wines.count;
    });
  }

  updateParams(value) {
    this.parameters.page = value.page;
    this.refreshWines();
  }

  changeSortCriteria(criteria: string) {
    console.log(criteria);
    if (this.parameters.sort == criteria) {
      if (this.parameters.sortDirection == 'desc') {
        this.parameters.sortDirection = '';
      } else {
        this.parameters.sortDirection = 'desc';
      }
    } else {
      this.parameters.sort = criteria;
      this.parameters.sortDirection = '';
    }
    this.refreshWines();
  }

  searchByName(searchString: string) {
    this.parameters.filter.name = searchString;
    this.refreshWines();
  }
}
