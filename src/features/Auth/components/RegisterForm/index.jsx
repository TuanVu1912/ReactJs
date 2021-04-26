import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-control/InputField';
import PasswordField from '../../../../components/form-control/PasswordField';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  tilte: {
    margin: theme.spacing(3, 0, 2, 0),
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    title: yup.string().required('Please enter tiltle').min(5, 'title  is too short'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(value);
      form.reset();
    }
  };
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography component="h3" variant="h5" className={classes.tilte}>
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="confirmPassword" label="Confirm Password" form={form} />
        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
          Create An Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
