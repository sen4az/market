import React from 'react';
import { Menu, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => (
  <Menu secondary>
    <Menu.Item name='all' active={filterBy === 'all'} onClick={setFilter.bind(this, 'all')}>Все</Menu.Item>
    <Menu.Item name='name' active={filterBy === 'name'} onClick={setFilter.bind(this, 'name')}>По имени</Menu.Item>
    <Menu.Item name='mass_high' active={filterBy === 'mass_high'} onClick={setFilter.bind(this, 'mass_high')}>Масса (Больше)</Menu.Item>
    <Menu.Item name='mass_low' active={filterBy === 'mass_low'} onClick={setFilter.bind(this, 'mass_low')}>Масса (Меньше)</Menu.Item>
    <Menu.Item><Input icon='search' onChange={e => setSearchQuery(e.target.value)} value={searchQuery} placeholder='Найти' /></Menu.Item>
  </Menu>
);

export default Filter;
