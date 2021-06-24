import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { addFavourite } from "../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Cocktail = ({ user, setUser, image, name, id, info, glass, recipe }) => {
  const username = user.username;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [favourites, setFavourites] = useState([
    { image, name, id, info, glass, recipe },
  ]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavourites = (e) => {
    console.log(username);
    e.preventDefault();
    addFavourite(username, favourites, setUser);
  };

  return (
    <article className="cocktail">
      <div className="img-container">
        <Card className={classes.root}>
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title={name}
          />
          <CardMedia className={classes.media} image={image} title={name} />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon onClick={handleFavourites} />
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
              <Typography paragraph>{recipe}</Typography>
              <Typography paragraph>{info}</Typography>
              <Typography paragraph>{glass}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </article>
  );
};

export default Cocktail;
