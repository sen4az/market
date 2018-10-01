import React from 'react';
import { Menu } from "semantic-ui-react";

const MenuComponent = () => (
  <Menu>
    <Menu.Item name="browse" onClick={this.handleItemClick}>
      Список альбомов
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="signup" onClick={this.handleItemClick}>
        Итого 
      </Menu.Item>

      <Menu.Item name="help" onClick={this.handleItemClick}>
        Корзина
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;

