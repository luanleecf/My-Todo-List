import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtomAddItensComponent } from './todo-buttom-add-itens.component';

describe('TodoButtomAddItensComponent', () => {
  let component: TodoButtomAddItensComponent;
  let fixture: ComponentFixture<TodoButtomAddItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButtomAddItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoButtomAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
