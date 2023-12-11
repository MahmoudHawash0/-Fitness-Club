import React from 'react'
import { Stack, Button, Typography } from '@mui/material'

import BodyPartImage from '../../assets/images/bodyPart.png'
import TargetImage from '../../assets/images/target.png'
import EquipmentImage from '../../assets/images/equipment.png'

export const Detail = ({ exerciseDetail }) => {
    const { bodyPart, name, gifUrl, equipment, target } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>

            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>

                <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }}
                    fontWeight={700} textTransform="capitalize">
                    {name}
                </Typography>

                <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize', color: '#1460e5' }}>{name}</span> is one
                    of the <br />best exercises to target your 
                    <span style={{ textTransform: 'capitalize', color: '#1460e5' }}> {target}</span>.
                    It will help you improve your{' '}<br /> mood and gain energy.
                </Typography>
                {
                    extraDetail?.map((item) => (
                        <Stack key={item.name} direction="row" gap="24px" alignItems="center">

                            <Button sx={{
                                background: '#fafafa', borderRadius: '50%',
                                width: '100px', height: '100px'
                            }}>
                                <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />

                            </Button>

                            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                                {item.name}
                            </Typography>

                        </Stack>
                    ))}
            </Stack>
        </Stack>
    )
}
