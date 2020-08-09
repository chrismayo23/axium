import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../data/menu.model';
import { MenuData } from '../data/menuData';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  menu: MenuModel;

  constructor() { }

  ngOnInit(): void {
    this.menu = MenuData;
  }
}
