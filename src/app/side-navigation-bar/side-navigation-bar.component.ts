import { Component } from '@angular/core';
import { SideNavigationBarItemComponent } from "../side-navigation-bar-item/side-navigation-bar-item.component";
import { NavigationItem } from "../navigation-item";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-side-navigation-bar',
    standalone: true,
    templateUrl: './side-navigation-bar.component.html',
    styleUrl: './side-navigation-bar.component.css',
    imports: [SideNavigationBarItemComponent, CommonModule]
})
export class SideNavigationBarComponent {
  navigationItemsList: NavigationItem[] = [
    {
      id: 1,
      title: "Group One",
      className: "group-one"
    },
    {
      id: 2,
      title: "Group Two",
      className: "group-two"
    },
    {
      id: 3,
      title: "Group Three",
      className: "group-three"
    },
    {
      id: 4,
      title: "Group Four",
      className: "group-four"
    },
    {
      id: 5,
      title: "Group Five",
      className: "group-five"
    },
    {
      id: 6,
      title: "Group Six",
      className: "group-six"
    },
    {
      id: 7,
      title: "Group Seven",
      className: "group-seven"
    }
  ]
}
