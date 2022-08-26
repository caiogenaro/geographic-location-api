import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu';
import { User } from 'src/app/shared/models/User';
import { finalize } from 'rxjs/operators';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = []
  user: User = new User();

  logoSite = "assets/images/tafudidootario.gif";
  profile_img = "assets/images/user_f_m.png";

  constructor(
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.listMenus()
  }

  initJS() {
    const script = document.createElement('script');
    script.src = 'assets/js/custom.js';
    script.type = 'text/javascript';
    script.async = true;
    script.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(script);
  }


  listMenus() {
    this.menuService.getMenu().pipe(
      finalize(() => {
        console.log('end');
        this.initJS();
      })
    ).subscribe((menus: any) => {
      this.menus = menus;
      console.log(this.menus);
    });
  }

}
