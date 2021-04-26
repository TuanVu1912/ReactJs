import { Box, Typography } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import { formatPrice } from 'utils';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : `${THUMBNAIL_PLACEHOLDER}`;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Box padding={1} onClick={handleClick}>
      <Box padding={1} minHeight="215px">
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>
      <Typography variant={'body2'}>{product.name}</Typography>
      <Typography variant={'body2'}>
        <Box component="span" fontSize="16px" fontWeight="bold" mg={1}>
          {formatPrice(product.salePrice)}
        </Box>
        <Box component="span">{product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}</Box>
      </Typography>
    </Box>
  );
}

export default Product;
