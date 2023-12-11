import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Loader } from '../components/loader/Loader';

export const BMIPage = () => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => setLoaded(false), 1500);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const calcBmi = (e) => {
        e.preventDefault();


        let bmi = (weight / (height * height)) * 703;
        setBmi(bmi.toFixed(1));
        if (weight === 0 || height === 0) {
            setMessage('Enter the value')
        } else {
            if (bmi < 25) {
                setMessage('You are underweight');
            } else if (bmi >= 25 && bmi < 30) {
                setMessage('You are a healthy weight');
            } else {
                setMessage('You are overweight');
            }

        }
    };

    const reloadBmi = () => {
        window.location.reload();
    };

    return (
        <div>
            {
                loaded ? (
                    <Loader />
                ) : (
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        p="20px"
                        id="bmi"
                        sx={{ mt: { lg: '50px', xs: '50px' } }}
                    >
                        <Typography
                            fontWeight={700}
                            sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                            mb="20px"
                            textAlign="center"
                        >
                            Calculate Your BMI
                        </Typography>
                        <Box className="bmi-card">
                            <form onSubmit={calcBmi}>
                                <Box>
                                    <label>Weight </label>
                                    <input
                                        className="bmi-card-input"
                                        value={weight}
                                        placeholder='Enter weight in (lbs)'
                                        onChange={(e) => setWeight(+e.target.value)}
                                    />
                                </Box>
                                <Box>
                                    <label>Height</label>
                                    <input
                                        className="bmi-card-input"
                                        value={height}
                                        placeholder='Enter height in (in)'
                                        onChange={(e) => setHeight(+e.target.value)}
                                    />
                                </Box>
                                <Box>
                                    <button
                                        type="submit"
                                        className="bmi-card-btn"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="submit"
                                        className="bmi-card-btn bmi-card-btn-outline"
                                        onClick={reloadBmi}
                                    >
                                        Reload
                                    </button>
                                </Box>
                            </form>
                            <Box>
                                <Typography variant="h5">Your BMI is: {bmi}</Typography>
                                <p>{message}</p>
                            </Box>
                        </Box>
                    </Stack>
                )
            }
        </div>
    );
}
