import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavigationBarComponent } from "./side-navigation-bar/side-navigation-bar.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewSpaceCapsuleFabComponent } from "./new-space-capsule-fab/new-space-capsule-fab.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SideNavigationBarComponent, DashboardComponent, NewSpaceCapsuleFabComponent]
})
export class AppComponent {
  title = 'lit-rf-knowledge-base';
}
