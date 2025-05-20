import { TestBed } from '@angular/core/testing';

import { TodoAngularService } from './todo-angular.service';

describe('TodoAngularService', () => {
  let service: TodoAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
