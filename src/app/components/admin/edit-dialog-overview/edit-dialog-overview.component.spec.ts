import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogOverviewComponent } from './edit-dialog-overview.component';

describe('EditDialogOverviewComponent', () => {
  let component: EditDialogOverviewComponent;
  let fixture: ComponentFixture<EditDialogOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDialogOverviewComponent]
    });
    fixture = TestBed.createComponent(EditDialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
