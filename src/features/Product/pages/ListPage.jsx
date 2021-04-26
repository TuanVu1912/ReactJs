import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import productApi from '../../../api/productApi';
import FilterViewer from '../components/Filters/FilterViewer';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import queryString from 'query-string';

ListPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0  ',
  },
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    margin: '20px',
    paddingBottom: '20px',
  },
}));
function ListPage(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 12,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);
  const [pagination, setPagination] = useState({
    limit: 12,
    total: 10,
    page: 1,
  });
  // const [filters, setFilters] = useState({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 12,
  //   _sort: queryParams._sort || 'salePrice:ASC',
  // });

  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filters),
  //   });
  // }, [history, filters]);
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch product list', error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  const handleOnChange = (e, page) => {
    // setFilters((prevFilter) => ({
    //   ...prevFilter,
    //   _page: page,
    // }
    // ));

    const filters = {
      ...queryParams,
      _page: page,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortChange = (newSortValue) => {
    // setFilters((prevFilter) => ({
    //   ...prevFilter,
    //   // _page: 1,
    //   _sort: newSortValue,
    // }));
    const filters = {
      ...queryParams,
      _sort: newSortValue,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  const handleFiltersChange = (newFilters) => {
    // setFilters((prevFilter) => ({
    //   ...prevFilter,
    //   ...newFilters,
    // }));
    const filters = {
      ...queryParams,
      ...newFilters,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  const setNewFilters = (newFilters) => {
    // setFilters(newFilters);
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters filters={queryParams} onChange={handleFiltersChange}></ProductFilters>
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort={queryParams._sort} onChange={handleSortChange}></ProductSort>
              <FilterViewer filters={queryParams} onChange={setNewFilters}></FilterViewer>
              {loading ? <ProductSkeletonList length={12} /> : <ProductList data={productList}></ProductList>}
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination._page}
                  onChange={handleOnChange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
