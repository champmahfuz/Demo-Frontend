import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Footer from '../../../../Shared/Footer/Footer';
import Navigation from '../../../../Shared/Navigation/Navigation';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FareSummary from './FareSummary';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import BookingCard from './BookingCard';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Booking = () => {



    return (
        <Box sx={ { flexGrow: 1 } }>

            <Navigation />
            <Container >
                <Box sx={ { flexGrow: 1, py: 5 } }>
                    <Grid container spacing={ 3 }>
                        <Grid item xs={ 6 } md={ 8 }>
                            <Box sx={ { flexGrow: 1, py: 1 } }>
                                <Grid container spacing={ 3 } sx={ {} }>
                                    <Grid item xs={ 6 } md={ 6 }>
                                        <h4>Review Your Booking</h4>
                                    </Grid>
                                    <Grid item xs={ 6 } md={ 6 } sx={ {
                                        display: 'flex',
                                        justifyContent: 'right'
                                    } }>
                                        <div role="presentation" onClick={ handleClick }>
                                            <Breadcrumbs aria-label="breadcrumb">
                                                <Link underline="hover" color="inherit" href="/">
                                                    Flight Selection
                                                </Link>

                                                <Typography color="text.primary">
                                                    Booking
                                                </Typography>
                                                <Link
                                                    underline="hover"
                                                    color="inherit"
                                                    href="/material-ui/getting-started/installation/"
                                                >
                                                    Payment
                                                </Link>
                                            </Breadcrumbs>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                            <BookingCard />
                        </Grid>
                        <Grid item xs={ 6 } md={ 4 }>
                            <FareSummary />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
};

export default Booking;