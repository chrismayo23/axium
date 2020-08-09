export interface MenuModel {
  menuItem: MenuItem[];
}

export interface MenuItem {
  menuItemName: string;
  subMenuItem?: string[];
}
