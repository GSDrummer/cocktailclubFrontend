import React, { useState, useEffect } from "react";
import "./main.css";
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

const Favourites = ({ user, setUser }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <article className="cocktail">
      <div className="img-container">
        <Card className={classes.root}>
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title={user.favourites[0].name}
          />
          <CardMedia
            className={classes.media}
            image={user.favourites[0].image}
            title={user.favourites[0].name}
          />
          <CardActions disableSpacing>
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
              <Typography paragraph>{user.favourites[0].recipe}</Typography>
              <Typography paragraph>{user.favourites[0].info}</Typography>
              <Typography paragraph>{user.favourites[0].glass}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </article>
  );
};

export default Favourites;
