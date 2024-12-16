import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRegisterModel } from '../../models/authModel';
import { registerUser } from '../../State/Authentication/Action';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../State/store';

interface RegisterFormProps {}

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

const initialValues: UserRegisterModel = {
    fullName: '',
    role: 'ROLE_CUSTOMER',
    email: '',
    password: '',
};

export const RegisterForm: FC<RegisterFormProps> = ({}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (value: UserRegisterModel) => {
        dispatch(registerUser({ userData: value, navigate }));
    };
    return (
        <div>
            <Typography variant="h5" className="text-center">
                Register
            </Typography>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            as={TextField}
                            name="fullName"
                            label="Full Name"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            error={Boolean(errors.fullName && touched.fullName)}
                            helperText={
                                touched.fullName && errors.fullName ? (
                                    <span className="text-red-600">
                                        {errors.fullName}
                                    </span>
                                ) : null
                            }
                        />
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
                            label="Password"
                            type="password"
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
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="role-simple-select-label">
                                Role
                            </InputLabel>
                            <Field
                                fullWidth
                                margin="normal"
                                as={Select}
                                labelId="role-simple-select-label"
                                id="role-simple-select"
                                name="role"
                                // value={age}
                                label="Role"
                                // onChange={handleChange}
                            >
                                <MenuItem value={'ROLE_CUSTOMER'}>
                                    Customer
                                </MenuItem>
                                <MenuItem value={'ROLE_RESTAURANT_OWNER'}>
                                    Restaurant Owner
                                </MenuItem>
                            </Field>
                        </FormControl>
                        <Button
                            sx={{ mt: 2, padding: '1rem' }}
                            fullWidth
                            type="submit"
                            variant="contained"
                        >
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>

            <Typography sx={{ mt: 3 }} variant="body2" align="center">
                If have an account already?
                <Button size="small" onClick={() => navigate('/account/login')}>
                    LOGIN
                </Button>
            </Typography>
        </div>
    );
};
