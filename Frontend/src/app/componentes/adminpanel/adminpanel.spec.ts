import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Adminpanel } from './adminpanel';

describe('Adminpanel', () => {
  let component: Adminpanel;
  let fixture: ComponentFixture<Adminpanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminpanel],
    }).compileComponents();

    fixture = TestBed.createComponent(Adminpanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
