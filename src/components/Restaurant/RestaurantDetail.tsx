import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useState } from 'react'

const categories = ["pizza", "burger", "chicken", "rice", "fries"];
const foodTypes = [
    {label: "All", value: "all"},
    {label: "Vegetarian only", value: "vegetarian"},
    {label: "Non-Vegetarian", value: "non_vegetarian"},
    {label: "Seasonal", value: "seasonal"},
];

const RestaurantDetail = () => {

    const [foodType, setFoodType] = useState("all")
    const handleFilter = (e: any) => {
        console.log(e.target.value, e.target.name);
    }

  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Burger Bar</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img 
                        className='w-full h-[40v] object-cover' 
                        src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="" 
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img 
                        className='w-full h-[40v] object-cover' 
                        src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="" 
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img 
                        className='w-full h-[40v] object-cover' 
                        src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="" 
                        />
                    </Grid>
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>Burger Bar</h1>
                <p className='text-gray-500 mt-1'>This is description</p>
                <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <LocationOnIcon/>
                        <span>Jakarta, Indonesia</span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <CalendarTodayIcon/>
                        <span>Mon-Sun: 09:00 AM - 09:00 PM</span>
                    </p>
                </div>  
            </div>
            <Divider/>
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter'>
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{paddingBottom: "1rem"}}>
                                Food Type
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup 
                                name='food_type'
                                value={foodType}
                                onChange={handleFilter}
                                >
                                    {foodTypes.map((item) => (
                                    <FormControlLabel 
                                    value={item.value} 
                                    control={<Radio />} 
                                    label={item.label} 
                                    />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant='h5' sx={{paddingBottom: "1rem"}}>
                                Food Category
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup 
                                name='food_type'
                                value={foodType}
                                onChange={handleFilter}
                                >
                                    {categories.map((item) => (
                                    <FormControlLabel 
                                    value={item} 
                                    control={<Radio />} 
                                    label={item} 
                                    />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    
                </div>
            </section>
        </section>
    </div>
  )
}

export default RestaurantDetail