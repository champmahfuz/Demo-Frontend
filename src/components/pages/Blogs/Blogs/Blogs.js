import React, { useEffect, useState } from 'react';
import { Box, CardActionArea, Container, Grid, Paper } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Blog from '../Blog/Blog';
import BlogSideber from '../BlogSidebar/BlogSidebar';


const Blogs = () => {

    return (
        <div>
            <Navigation />
            <Container maxWidth="lg"
                sx={ {
                    py: 7
                } }>
                <Grid>
                    <Grid container spacing={ 2 }>

                        <Grid item xs={ 12 } sm={ 6 } md={ 9 }>
                            <Blog />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 } md={ 3 } >
                            <BlogSideber />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default Blogs;