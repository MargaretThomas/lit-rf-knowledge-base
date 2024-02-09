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
      title: "LinkedIn logo",
      imageSource: "../../assets/linkedin-logo.png"
    },
    {
      id: 2,
      title: "Instagram logo",
      imageSource: "../assets/instagram-logo.png"
    },
    {
      id: 3,
      title: "Twitter logo",
      imageSource: "../assets/twitter-logo.png"
    },
    {
      id: 4,
      title: "Reddit logo",
      imageSource: "../assets/reddit-logo.png"
    },
    {
      id: 3,
      title: "Facebook logo",
      imageSource: "../assets/facebook-logo.png"
    },
    {
      id: 4,
      title: "Generic web logo",
      imageSource: "../assets/web-logo.png"
    },
  ]
}
