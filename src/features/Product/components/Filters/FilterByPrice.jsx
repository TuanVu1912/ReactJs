import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: '1px solid #ccc',
  },
  range: {
    display: 'flex',
    flexFlow: 'row nowarap',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '&>span': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  btn: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleSubmit = () => {
    if (values.salePrice_gte === 0 && values.salePrice_lte === 0) return;
    if (onChange) onChange(values);

    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  const handleReset = () => {
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">GIÁ</Typography>
      <Box className={classes.range}>
        <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} placeholder="0" />
        <span>-</span>
        <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} placeholder="0" />
      </Box>
      <Box className={classes.btn}>
        <Button variant="outlined" color="primary" onClick={handleSubmit}>
          Áp dụng
        </Button>
        <Button variant="outlined" color="primary" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </Box>
  );
}

export default FilterByPrice;
