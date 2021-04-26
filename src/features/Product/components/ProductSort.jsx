import { Tab, Tabs } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Giá thấp" value={'salePrice:ASC'}></Tab>
      <Tab label="Giá cao" value={'salePrice:DESC'}></Tab>
    </Tabs>
  );
}

export default ProductSort;
