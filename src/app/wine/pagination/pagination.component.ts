import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number;
  @Input() pageSize: number;
  @Output() pageEmitter = new EventEmitter();
  page: number;

  constructor() {}

  ngOnInit(): void {}

  updatePage() {
    this.pageEmitter.emit({ page: this.page });
  }
}
