import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import isSW from 'is-sw';
import { NgLoadingSkeletonModule } from 'ng-loading-skeleton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgLoadingSkeletonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skeleton-test-app';

  ngOnInit() {
    console.log('AppComponent initialized');

    // Use the function from your package
    console.log(isSW("SW"));  // Should print: true
    console.log(isSW(""));    // Should print: false
  }
}
