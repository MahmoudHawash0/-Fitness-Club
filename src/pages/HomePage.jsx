import React, { useState } from 'react'
import { Box } from '@mui/material'
import { HeroBanner } from '../components/home/HeroBanner'
import { SearchExercises } from '../components/home/SearchExercises'
import { Exercises } from '../components/home/Exercises'

export const HomePage = () => {

  const [bodyPart, setBodyPart] = useState('');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  )
}
