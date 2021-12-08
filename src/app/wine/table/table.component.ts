import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Wine } from 'src/app/model/wine.model';
import { WineService } from 'src/app/wineService/wine.service';

@Component({
  selector: 'wc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() wines: Wine[];
  @Output() wineDeleted = new EventEmitter();
  @Output() onSort = new EventEmitter();

  constructor(private service: WineService) {}

  ngOnInit(): void {}

  onDelete(id: number) {
    this.service.removeWine(id).subscribe((wine) => {
      this.wineDeleted.emit(wine._id);
    });
  }

  onChangeSortCriteria(criteria: string) {
    this.onSort.emit(criteria);
  }
}
