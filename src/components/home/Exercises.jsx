import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ExercisesCard } from './ExercisesCard'
import { fetchData, exerciseOptions } from '../../utils/FetchData';

export const Exercises = ({ exercises, setExercises, bodyPart }) => {

  let arr = Array.from(exercises)
  // const exercisesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  // paginate
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercise = arr.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        )
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        )
      }
      setExercises(exercisesData)
    }

    fetchExercisesData();

  }, [bodyPart])

  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'
    >
      <Typography variant="h4" mb="46px">
        Showing Exercises Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap='wrap' justifyContent='center'>
        {
          currentExercise.map((exercise, index) => (
            <ExercisesCard key={index} exercise={exercise} />
          )
          )
        }
      </Stack>

      <Stack mt='100px' alignItems='center'>
        {
          exercises.length > 9 && (
            <Pagination
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size='large'
            />
          )
        }
      </Stack>
    </Box>
  )
}
