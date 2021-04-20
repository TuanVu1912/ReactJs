import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};
function InputField(props) {
  const { form, name, label, errors } = props;
  console.log(errors);
  return (
    <Controller
      render={({ field }) => {
        return <TextField label={label} variant="outlined" margin="normal" fullWidth {...field} />;
      }}
      name={name}
      control={form.control}
    />
  );
}

export default InputField;
