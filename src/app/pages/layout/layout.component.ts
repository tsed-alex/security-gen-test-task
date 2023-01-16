import { Component } from '@angular/core';
import {NavigationLink} from "../../@domain/layout/types";
import {NAVIGATION_LINK} from "../../@domain/layout/layout.options";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public optionsLinks: NavigationLink[] = NAVIGATION_LINK;
  public activeLink = this.optionsLinks[0].link;
}
