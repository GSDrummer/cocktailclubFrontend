import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleFetch = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    handleFetch();
    e.preventDefault();
    console.log(data)

  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search for a Cocktail:
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
        {loading ? (
          <div>...</div>
        ) : (
        <div>
          <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.drinks[0].strDrink}
      />
      <CardMedia
        className={classes.media}
        image={data.drinks[0].strDrinkThumb}
        title={data.drinks[0].strDrink}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
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
             {data.drinks[0].strIngredient1},
            {data.drinks[0].strIngredient2},{data.drinks[0].strIngredient3},
            {data.drinks[0].strIngredient4}
          </Typography>
          <Typography paragraph>
            {data.drinks[0].strInstructions}
          </Typography>
          <Typography paragraph>
            {data.drinks[0].strGlass}
          </Typography>
          <Typography>
           {data.drinks[0].strIBA}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
        </div>
      )}
    </div>
  );
};

export default Search;
