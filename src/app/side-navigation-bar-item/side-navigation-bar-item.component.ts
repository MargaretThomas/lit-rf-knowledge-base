import { Component, Input } from '@angular/core';
import { NavigationItem } from '../navigation-item';

@Component({
  selector: 'app-side-navigation-bar-item',
  standalone: true,
  imports: [],
  templateUrl: './side-navigation-bar-item.component.html',
  styleUrl: './side-navigation-bar-item.component.css'
})
export class SideNavigationBarItemComponent {
  @Input() navigationItem!:NavigationItem;
}
