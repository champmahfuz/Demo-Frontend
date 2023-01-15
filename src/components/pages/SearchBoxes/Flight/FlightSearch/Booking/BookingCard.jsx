import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useValue from '../../../../../../hooks/useValue';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton { ...other } />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const BookingCard = () => {
    const [expandedOne, setExpandedOne] = React.useState(true);
    const [expandedTwo, setExpandedTwo] = React.useState(true);
    const [expandedThree, setExpandedThree] = React.useState(true);
    const { selectedFlight } = useValue()
    console.log(selectedFlight.selectedFlight)


    const handleExpandClick = () => {
        setExpandedOne(!expandedOne);
    };
    const handleFlightDetailsExpandClick = () => {
        setExpandedTwo(!expandedTwo);
    };
    return (<>
        <Card sx={ { mb: 3 } }>
            <CardActions disableSpacing
                sx={ { borderBottom: '2px solid #333' } }
                // expand={ expandedOne }
                onClick={ handleExpandClick }
                aria-expanded={ expandedOne }
                aria-label="show more"
            >
                <Typography variant="body2" color="text.secondary" fontWeight={ 900 } fontSize={ 15 }>
                    Shcedules Details
                </Typography>
                <ExpandMore
                // expand={ expandedOne }
                // onClick={ handleExpandClick }
                // aria-expanded={ expandedOne }
                // aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={ expandedOne } timeout="auto" unmountOnExit>
                <CardContent >
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
        <Card sx={ {} }>
            <CardActions disableSpacing
                sx={ { borderBottom: '2px solid #333' } }
                // expand={ expandedTwo }
                onClick={ handleFlightDetailsExpandClick }
                aria-expanded={ expandedTwo }
                aria-label="show more"
            >
                <Typography variant="body2" color="text.secondary" fontWeight={ 900 } fontSize={ 15 }>
                    Flight Details
                </Typography>
                <ExpandMore
                // expand={ expandedTwo }
                // onClick={ handleFlightDetailsExpandClick }
                // aria-expanded={ expandedTwo }
                // aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={ expandedTwo } timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    </>
    );
};

export default BookingCard;