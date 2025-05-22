import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDetailMainComponent } from './projects-detail-main.component';

describe('ProjectsDetailMainComponent', () => {
  let component: ProjectsDetailMainComponent;
  let fixture: ComponentFixture<ProjectsDetailMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsDetailMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsDetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
