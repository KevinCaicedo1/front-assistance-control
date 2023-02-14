import { Component, OnInit } from '@angular/core';
import { RoutePanelService } from 'src/app/services/routes.services';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  listMenu = [
    { id: 0, name: 'Home', link: '/inicio' },
    { id: 1, name: 'AddFace', link: '/agregar-rostro' },
    { id: 2, name: 'Report', link: '/reporte' },
    { id: 3, name: 'Assist', link: '/marcar-asistencia' },
    { id: 4, name: 'Users', link: '/usuarios' }];

  addActiveClass(number: number) {
    this.data = number;
    const menuItems = document.querySelectorAll('.list');
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    menuItems[number].classList.add('active');
  }
  selectRoute: number;

  constructor(private routePanel: RoutePanelService) {
    this.selectRoute = this.data;

  }



  get data(): number {
    return this.routePanel.data;
  }

  set data(val: number) {
    this.routePanel.data = val;
    this.selectRoute = val;
  }

  ngOnInit(): void {
    let location = window.location.href;
    this.listMenu.forEach((item, index) => {
      if (location.includes(item.link)) {
        this.addActiveClass(index);
      }
    });
  }

}
