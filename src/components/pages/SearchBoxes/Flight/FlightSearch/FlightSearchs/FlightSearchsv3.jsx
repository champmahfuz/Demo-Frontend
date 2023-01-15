import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Skeleton } from '@mui/material';
import useFetch from '../../../../../../hooks/useFetch';
import useValue from '../../../../../../hooks/useValue';
import Footer from '../../../../Shared/Footer/Footer';
import Navigation from '../../../../Shared/Navigation/Navigation';
import AvailableFlights from '../AvailableFlight/AvailableFlights/AvailableFlights';
import FlightCards from '../AvailableFlight/FlightCard/FlightCards/FlightCards';
import SearchSidebar from '../SearchSidebar/SearchSidebars/SearchSidebar';
import FlightCardsv3 from '../AvailableFlight/FlightCard/FlightCards/FlightCardsv3';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


const FlightSearchsv3 = () => {
    // const [data, setData] = useState()
    // useEffect(() => {
    //     fetch(`http://localhost:5000/api/flightSearch`)
    //         .then((response) => response.json())
    //         .then((data) => setData(data));
    // }, [])
    const { toValue, fromValue, travelDate } = useValue({});
    const arrivalLocation = toValue?.name.split("(")[1].slice(0, 3);
    const departureLocation = fromValue?.name.split("(")[1].slice(0, 3);
    // const startDate = travelDate?.replaceAll("/", "-");
    const TheTravelDate = new Date(travelDate.getTime() - (travelDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    const { data, loading, error, reFetch } = useFetch(`api/flightSearch?arrivalLocation=${arrivalLocation}&departureLocation=${departureLocation}&departureDate=${TheTravelDate}&travler=2`);
    console.log(data);
    const itinerariesDatas = data?.groupedItineraryResponse?.itineraryGroups[0]?.itineraries;
    return (
        <Box>
            <Navigation />
            <Container>
                <Grid container spacing={ 2 } sx={ {
                    py: 7
                } }>
                    <Grid item xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <SearchSidebar />
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 9 } lg={ 9 }>
                        <AvailableFlights />
                        { loading ?
                            // <Skeleton variant="rectangular" width={ 210 } height={ 118 } /> 
                            <Stack sx={ { width: '100%', color: 'grey.500' } } spacing={ 2 }>
                                <LinearProgress color="secondary" />
                                <LinearProgress color="success" />
                                <LinearProgress color="inherit" />
                            </Stack>
                            : itinerariesDatas?.map((itinerariesData, index) => (
                                <FlightCardsv3 key={ index } itinerariesData={ itinerariesData } data={ data } itinerariesDatas={ itinerariesDatas } />
                            )) }
                        {/* { loading ? 'LOADING' :
                            data?.data?.map((sFlight) => (
                                <FlightCards sFlight={ sFlight } />
                            ))
                        } */}
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default FlightSearchsv3;