import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import React from 'react'
import { CartItem } from './CartItem'
import { AddressCard } from './AddressCard';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FormAddressModel } from '../../models/formAddressModel';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};  

const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: "",
};

const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    state: Yup.string().required("State address is required"),
    pincode: Yup.string().required("Pincode address is required"),
    city: Yup.string().required("City address is required"),
});

const items = [1, 2, 3];

const Cart = () => {
    const createOrderUsingSelectedAddress = () => {};
    const handleOpenAddressModal = () => {setOpen(true)};
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleSubmit = (value: FormAddressModel) => {
        console.log(value);
    }
  return (
    <>
        <main className='lg:flex justify-between'>
            <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                {items.map((item) => (
                    <CartItem/>
                ))}

                <Divider/>

                <div className='billDetails px-5 text-sm'>
                    <p className='font-extralight py-5'>Bill Details</p>
                    <div className='space-y-3'>
                        <div className='flex justify-between text-gray-400'>
                            <p>Item Total</p>
                            <p>Rp.90,000</p>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>Delivery Fee</p>
                            <p>Rp.9,000</p>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>GST and Restaurant Charges</p>
                            <p>Rp.9,000</p>
                        </div>

                        <Divider/>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p>Total Pay</p>
                        <p>Rp.108,000</p>
                    </div>
                </div>
            </section>

            <Divider orientation='vertical' flexItem/>

            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                <div>
                    <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                    <div className='flex gap-5 flex-wrap justify-center'>
                        {[1, 2, 3, 4, 5].map((item) => <AddressCard item={item} showButton={true} handleSelectAddress={createOrderUsingSelectedAddress}/>)}
                        <Card className="flex gap-5 w-64 p-5">
                            <AddLocationAltIcon />
                            <div className="space-y-3 text-gray-500">
                                <h1 className="font-semibold text-lg text-white">Add New Address</h1>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={handleOpenAddressModal}
                                >
                                    Add
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                >
                    {({ errors, touched }) =>  (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                    as={TextField}
                                    name="streetAddress"
                                    label="Street Address"
                                    fullWidth
                                    variant="outlined"
                                    error={Boolean(errors.streetAddress && touched.streetAddress)}
                                    helperText={
                                        touched.streetAddress && errors.streetAddress ? (
                                            <span className='text-red-600'>{errors.streetAddress}</span>
                                        ) : null
                                    }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                    as={TextField}
                                    name="state"
                                    label="State"
                                    fullWidth
                                    variant="outlined"
                                    error={Boolean(errors.state && touched.state)} 
                                    helperText={
                                        touched.state && errors.state ? (
                                            <span className='text-red-600'>{errors.state}</span>
                                        ) : null
                                    }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                    as={TextField}
                                    name="pincode"
                                    label="Pin Code"
                                    fullWidth
                                    variant="outlined"
                                    error={Boolean(errors.pincode && touched.pincode)}
                                    helperText={
                                        touched.pincode && errors.pincode ? (
                                            <span className='text-red-600'>{errors.pincode}</span>
                                        ) : null
                                    }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                    as={TextField}
                                    name="city"
                                    label="City"
                                    fullWidth
                                    variant="outlined"
                                    eerror={Boolean(errors.city && touched.city)}
                                    helperText={
                                        touched.city && errors.city ? (
                                            <span className='text-red-600'>{errors.city}</span>
                                        ) : null
                                    }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button 
                                    fullWidth 
                                    variant='contained' 
                                    type='submit' 
                                    color='primary'
                                    >
                                        Delivery Here
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form> 
                    )}                    
                </Formik>
            </Box>
        </Modal>
    </>
  )
}

export default Cart