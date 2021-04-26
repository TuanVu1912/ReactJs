import { Box, FormControl, IconButton, makeStyles, OutlinedInput, Typography } from '@material-ui/core';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    maxWidth: '200px',
  },
}));

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
};

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label, disabled } = props;
  const { setValue } = form;

  console.log(setValue);
  return (
    <FormControl fullWidth margin="normal" variant="outlined" size="small">
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => {
          return (
            <Box className={classes.box}>
              <IconButton
                onClick={() => setValue(name, Number.parseInt(field.value) ? Number.parseInt(field.value) - 1 : 1)}
              >
                <RemoveCircleOutline />
              </IconButton>
              <OutlinedInput
                id={name}
                type="number"
                disabled={disabled}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
              <IconButton
                onClick={() => setValue(name, Number.parseInt(field.value) ? Number.parseInt(field.value) + 1 : 1)}
              >
                <AddCircleOutline />
              </IconButton>
            </Box>
          );
        }}
      />
      {/* <FormHelperText>{errors[name]?.message}</FormHelperText> */}
    </FormControl>
  );
}

export default QuantityField;
