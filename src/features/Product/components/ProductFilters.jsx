import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import { Box } from '@material-ui/core';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      'category.id': newCategoryId,
    };
    onChange(newFilters);
  };
  const handlePriceChange = (values) => {
    if (onChange) onChange(values);
  };
  const handleServiceChange = (value) => {
    if (onChange) onChange(value);
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handlePriceChange} />
      <FilterByService filters={filters} onChange={handleServiceChange} />
    </Box>
  );
}

export default ProductFilters;
