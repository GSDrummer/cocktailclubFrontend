
import { Link } from "react-router-dom";
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocalBarIcon from '@material-ui/icons/LocalBar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Cocktail =({ image, name, id, info, glass, recipe }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <article className="cocktail">
      <div className="img-container">
      
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={name}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
             {recipe}
          </Typography>
          <Typography paragraph>
            {info}
          </Typography>
          <Typography paragraph>
            {glass}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    
    </article>
  );
}

export default Cocktail