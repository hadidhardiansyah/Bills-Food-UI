import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { FC } from 'react'

interface EventCardProps {
  
}

export const EventCard: FC<EventCardProps> = ({  }) => {
  return (
    <div>
        <Card sx={{width: 345}}>
            <CardMedia 
                sx={{height: 345}}
                image='https://images.pexels.com/photos/29368032/pexels-photo-29368032/free-photo-of-delicious-gourmet-burger-with-fresh-ingredients.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            />
            <CardContent>
                <Typography variant='h5'>
                    Indonesian Fast Food
                </Typography>
                <Typography variant='body2'>
                    50% off on your first order
                </Typography>
                <div className='py-3 space-y-2'>
                    <p>{'Jakarta'}</p>
                    <p className='text-sm text-blue-500'>{'January 1, 2025 08:00 PM'}</p>
                    <p className='text-sm text-red-500'>{'January 2, 2025 08:00 PM'}</p>
                </div>
            </CardContent>

            { 
                false &&
                <CardActions>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>
            }
        </Card>
    </div>
  )
}