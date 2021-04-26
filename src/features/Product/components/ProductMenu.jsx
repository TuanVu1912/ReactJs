import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    listStyleType: 'none',

    '& > li': {
      padding: theme.spacing(2, 4),
    },
    '& > li > a': {
      color: theme.palette.grey[700],
    },
    '& > li .active': {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
  },
}));

function ProductMenu(props) {
  const classes = useStyles();
  const { url } = useRouteMatch();
  return (
    <Box>
      <ul className={classes.root}>
        <li>
          <Link>
            <NavLink to={url} exact>
              Description
            </NavLink>
          </Link>
        </li>
        <li>
          <Link>
            <NavLink to={`${url}/information`} exact>
              Information
            </NavLink>
          </Link>
        </li>
        <li>
          <Link>
            <NavLink to={`${url}/reviews`} exact>
              Reviews
            </NavLink>
          </Link>
        </li>
      </ul>
    </Box>
  );
}

export default ProductMenu;
