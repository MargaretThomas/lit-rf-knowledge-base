import { Component, Input } from '@angular/core';
import { SpaceCapsule } from '../space-capsule';

@Component({
  selector: 'app-space-capsule',
  standalone: true,
  imports: [],
  templateUrl: './space-capsule.component.html',
  styleUrl: './space-capsule.component.css'
})
export class SpaceCapsuleComponent {
  @Input() spaceCapsule!:SpaceCapsule;
}
