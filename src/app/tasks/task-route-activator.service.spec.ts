import { TestBed } from '@angular/core/testing';

import { TaskRouteActivatorService } from './task-route-activator.service';

describe('TaskRouteActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskRouteActivatorService = TestBed.get(TaskRouteActivatorService);
    expect(service).toBeTruthy();
  });
});
