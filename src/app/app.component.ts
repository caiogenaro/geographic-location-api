import { SideNavToggle } from './shared/models/sidenavtoggle';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'geo-front';

  classNameBody = "body";

  isSideNavCollapsed = false;
  largura = 0;


  onToggleSideNav(data: SideNavToggle): void {
    this.largura = data.largura || 0;
    this.isSideNavCollapsed = data.collapsed || false;

    this.classNameBody = this.checkClassType();

  }

  checkClassType(): any {
    let styleClass = "body"
    if(this.largura > 768 && this.isSideNavCollapsed){
      styleClass = "body-trimmed"
    }else if (this.isSideNavCollapsed && this.largura <= 768 && this.largura > 0){
      styleClass = "body-md-screen"
    }

    return styleClass;    
  }
}
