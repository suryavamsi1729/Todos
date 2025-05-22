import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDetailSideComponent } from './projects-detail-side.component';

describe('ProjectsDetailSideComponent', () => {
  let component: ProjectsDetailSideComponent;
  let fixture: ComponentFixture<ProjectsDetailSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsDetailSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsDetailSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
