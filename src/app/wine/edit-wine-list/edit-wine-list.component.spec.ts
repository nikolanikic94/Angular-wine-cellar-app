import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWineListComponent } from './edit-wine-list.component';

describe('EditWineListComponent', () => {
  let component: EditWineListComponent;
  let fixture: ComponentFixture<EditWineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
