import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavigationBarComponent } from "./side-navigation-bar/side-navigation-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SideNavigationBarComponent]
})
export class AppComponent {
  title = 'lit-rf-knowledge-base';
}
