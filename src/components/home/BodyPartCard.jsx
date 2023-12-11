import React from 'react'
import { Typography, Stack } from '@mui/material'
import All from "../../assets/icons/chest.png";

export const BodyPartCard = ({ item, bodyPart, setBodyPart }) => {

    return (
        <Stack
            type='button'
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? '4px solid #1460e5' : '',
                borderBottom: bodyPart === item ? '4px solid #1460e5' : '',
                backgroundColor: '#fff',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
        >

            <img src={All} alt="dumbbell" style={{ width: '100px', height: '100px' }} />

            <Typography fontSize="24px" fontWeight='bold' color="#3A1212"
                textTransform='capitalize'>{item}</Typography>
        </Stack >
    )
}