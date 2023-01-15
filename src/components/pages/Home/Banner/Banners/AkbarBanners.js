import { Container, Grid, Paper, styled } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import RoundTrip from '../../../SearchBoxes/Flight/Trips/RoundTrip/RoundTrip';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AkbarBanners = () => {
    return (
        <Box className="" sx={{
            background: `url(https://wallpapershome.com/images/pages/pic_h/23277.jpg)`,
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            clipPath: `polygon(50% 0%, 100% 0, 100% 86%, 38% 100%, 12% 100%, 0 91%, 0 0)`,
            py: 15,
        }}>
            <Container>
                <Grid container >
                    <Grid item xs={12} md={10} order={{ xs: 2, sm: 2, md: 1, lg: 1 }} >
                        {/* <Flights /> */}
                        <RoundTrip />
                    </Grid>
                    <Grid item xs={12} md={2} order={{ xs: 1, sm: 1, md: 2, lg: 2 }}>
                        <Box sx={{ textAlign: 'right' }}>
                            <img style={{ width: '90%', height: '90%', objectFit: 'fill', }} src="https://themeim.com/demo/flynext/assets/images/element/element-2.png" alt="" />
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default AkbarBanners;