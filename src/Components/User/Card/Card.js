import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MediaCard = () => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleLearnMoreClick = () => { setIsFlipped(!isFlipped); };

    return (
        <Card sx={{ width: window.innerWidth < 768 ? '90%' : 250 }} onClick={() => setIsFlipped(!isFlipped)}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                title="green iguana"
            />
            {!isFlipped && (
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Course Outline
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <ul>
                            <li>Introduction</li>
                            <li>What is React?</li>
                            <li>Why React?</li>
                            <li>React Features</li>
                            <li>React vs Angular</li>
                        </ul>
                    </Typography>
                </CardContent>
            )}
            {isFlipped && (
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        More Details
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <ul>
                            <li>Introduction</li>
                            <li>What is React?</li>
                        </ul>
                    </Typography>
                </CardContent>
            )}
            <CardActions>
                <Button size="small" onClick={handleLearnMoreClick} sx={{
                    color: '#6AC258',
                }}>
                    {isFlipped ? <ArrowBackIosIcon fontSize='small' sx={{ color: '#6AC258' }} /> : null}
                    {isFlipped ? 'Back' : 'More'}
                    {isFlipped ? null : <ArrowForwardIosIcon fontSize='small' />}
                </Button>
            </CardActions>
        </Card>
    );
};

export default MediaCard;
