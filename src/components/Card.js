import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minHeight: 380,
    margin: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    transition: 'transform 200ms',
    '&:hover':{
      transform: 'scale(1.05)'
    }
  },
  content: {
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff'
  },
  description: {
    fontFamily: 'Nunito',
    fontSize: '1rem',
    color: '#ddd'
  }
});

export default function ImgMediaCard({project, animate}) {
  const classes = useStyles();
  return (
    <Collapse in={animate} timeout={1000}>
      <a href={project.url} target="_blank">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia        
              component="img"
              alt=""
              height="200"
              // style={{width: '250px'}}
              image={project.img_path}
              title={project.title}
              />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                {project.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </Collapse>
  );
}