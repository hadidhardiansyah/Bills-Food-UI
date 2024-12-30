import React, { FC } from 'react';
import { UserLoginModel } from '../../models/authModel';
import { Button, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../State/Authentication/Action';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../State/store';

interface LoginFormProps {}
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

const initialValues: UserLoginModel = {
    email: '',
    password: '',
};

export const LoginForm: FC<LoginFormProps> = ({}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (values: UserLoginModel) => {
        dispatch(loginUser({ userData: values, navigate }));
    };
    return (
        <div>
            <Typography variant="h5" className="text-center">
                Login
            </Typography>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            error={Boolean(errors.email && touched.email)}
                            helperText={
                                touched.email && errors.email ? (
                                    <span className="text-red-600">
                                        {errors.email}
                                    </span>
                                ) : null
                            }
                        />
                        <Field
                            as={TextField}
                            name="password"
                            type="password"
                            label="Password"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            error={Boolean(errors.password && touched.password)}
                            helperText={
                                touched.password && errors.password ? (
                                    <span className="text-red-600">
                                        {errors.password}
                                    </span>
                                ) : null
                            }
                        />
                        <Button
                            sx={{ mt: 2, padding: '1rem' }}
                            fullWidth
                            type="submit"
                            variant="contained"
                        >
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>

            <Typography sx={{ mt: 3 }} variant="body2" align="center">
                Don't have an account?
                <Button
                    size="small"
                    onClick={() => navigate('/account/register')}
                >
                    REGISTER
                </Button>
            </Typography>
        </div>
    );
};
