import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import { addToCart } from 'features/Cart/CartSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddToCartForm from '../components/AddToCartForm';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductInformation from '../components/ProductInformation';
import ProductMenu from '../components/ProductMenu';
import ProductReview from '../components/ProductReview';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3),
  },
  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    flex: '1 1 0 ',
    marginLeft: theme.spacing(2),
  },
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    margin: '20px',
    paddingBottom: '20px',
  },
  loading: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  },
}));

function DetailPage(props) {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const {
    params: { productId },
  } = useRouteMatch();
  const { product, loading } = useProductDetail(productId);
  if (loading)
    return (
      <Box className={classes.loading}>
        <LinearProgress color="secondary" />
      </Box>
    );

  const handleAddToCartSubmit = (quantity) => {
    dispatch(addToCart({ id: product.id, product, quantity }));
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>
          <Route path={`${url}/information`} component={ProductInformation}></Route>
          <Route path={`${url}/reviews`} component={ProductReview}></Route>
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
