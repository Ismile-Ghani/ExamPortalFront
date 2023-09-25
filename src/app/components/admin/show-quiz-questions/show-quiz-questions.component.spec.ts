import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuizQuestionsComponent } from './show-quiz-questions.component';

describe('ShowQuizQuestionsComponent', () => {
  let component: ShowQuizQuestionsComponent;
  let fixture: ComponentFixture<ShowQuizQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowQuizQuestionsComponent]
    });
    fixture = TestBed.createComponent(ShowQuizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
