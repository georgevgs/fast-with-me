import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FastWithMe';

  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) { }
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
