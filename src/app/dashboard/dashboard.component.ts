import { Component } from '@angular/core';
import { SpaceCapsuleComponent } from '../space-capsule/space-capsule.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SpaceCapsuleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
