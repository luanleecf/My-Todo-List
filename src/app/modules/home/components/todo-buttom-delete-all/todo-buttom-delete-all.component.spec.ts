import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtomDeleteAllComponent } from './todo-buttom-delete-all.component';

describe('TodoButtomDeleteAllComponent', () => {
  let component: TodoButtomDeleteAllComponent;
  let fixture: ComponentFixture<TodoButtomDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButtomDeleteAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoButtomDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
