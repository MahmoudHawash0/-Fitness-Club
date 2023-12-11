import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const ExercisesCard = ({ exercise }) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />

            <Stack direction='row' justifyContent='space-around'>

                <Button sx={{
                    ml: '21px', color: '#fff',
                    background: '#1460e5', fontSize: '14px',
                    borderRadius: '10px', textTransform: 'capitalize'
                }}>
                    {exercise.bodyPart}
                </Button>

                <Button sx={{
                    ml: '21px', color: '#1460e5',
                    background: '#ededed', fontSize: '14px',
                    borderRadius: '10px', textTransform: 'capitalize'
                }}>
                    {exercise.target}
                </Button>

            </Stack>

            <Typography textAlign='center' color='#000'
                fontWeight='bold' mt='11px'
                pb='10px' textTransform='capitalize' fontSize='22px'>
                {exercise.name}
            </Typography>
        </Link>
    )
}
