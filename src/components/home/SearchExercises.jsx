import React, { useState } from 'react'
import { Box, Button, Stack, Typography, TextField } from '@mui/material'
import { fetchData, exerciseOptions } from '../../utils/FetchData';
import { useEffect } from 'react';
import { HorizontalScrollbar } from './HorizontalScrollbar';

export const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  // to get all body parts exercises
  useEffect(() => {

    const fetchExercisesData = async () => {

      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );

      setBodyParts(['all', ...bodyPartsData])
      console.log(bodyPartsData.data)
    }
    fetchExercisesData();
  }, [])

  // to handle search
  const handleSearch = async () => {

    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercises)

    }
  }

  return (
    <Stack justifyContent='center' alignItems='center'
      mt='37px' p='20px'>

      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px' }
      }} mb='50px' textAlign='center'>
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none', borderRadius: '4px',
              color:'#fff',
              opacity:'0.5'
              
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#191f2a',
            borderRadius: '7px',
            
          }}
          height='76px'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase())
          }}
          placeholder='Search For Exercises'
          type='text'
        />

        <Button className='search-btn'
          sx={{
            bgcolor: '#1460e5',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '58px',
            position: 'absolute',
            right: '0',
            bottom: '0'
          }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts}
          setBodyPart={setBodyPart} bodyPart={bodyPart} bodyParts />
      </Box>
    </Stack>
  )
}
