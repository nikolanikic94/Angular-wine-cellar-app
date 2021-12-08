import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'wc-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  @Output() onSearch = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchText: '',
    });
  }

  ngOnInit(): void {}

  onsubmit() {
    this.onSearch.emit(this.searchForm.value.searchText);
  }
}
