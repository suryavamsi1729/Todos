import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersCompComponent } from './team-members-comp.component';

describe('TeamMembersCompComponent', () => {
  let component: TeamMembersCompComponent;
  let fixture: ComponentFixture<TeamMembersCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMembersCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMembersCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
