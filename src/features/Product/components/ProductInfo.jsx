import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { formatPrice } from 'utils';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
  description: {
    margin: theme.spacing(2, 0),
  },
  PriceBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
  },
  salePrice: {
    marginRight: theme.spacing(3),
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 'bold',
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-through',
  },
}));

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  console.log(name);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>
      <Box className={classes.PriceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>
        <Box component="span" className={classes.originalPrice}>
          {formatPrice(originalPrice)}
        </Box>
        <Box component="span">{promotionPercent > 0 ? `-${promotionPercent}%` : ''}</Box>
      </Box>
    </Box>
  );
}
export default ProductInfo;
