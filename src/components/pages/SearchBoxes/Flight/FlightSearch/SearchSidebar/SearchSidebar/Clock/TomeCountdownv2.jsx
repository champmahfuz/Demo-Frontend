import { Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const TomeCountdownv2 = () => {
    const [time, setTime] = useState(1800);

    useEffect(() => {
        let timer = setInterval(() => {
            setTime((time) => {
                if (time === 0) {
                    clearInterval(timer);
                    return 0;
                } else return time - 1;
            });
        }, 1000);
    }, []);

    // console.log(time);


    return (
        <Paper sx={ {
            textAlign: 'center',
            border: '2px solid silver',
            p: 1,
            mb: 1
        } }>
            <Typography variant='caption'>
                Book Now before it gets sold out.
            </Typography>
            <Paper>
                <span style={ { fontSize: '30px', color: 'red', fontWeight: '900' } }> { `${Math.floor(time / 60)}`.padStart(2, 0) }:
                    { `${time % 60}`.padStart(2, 0) }</span>
            </Paper>
        </Paper>
    );
};

export default TomeCountdownv2;