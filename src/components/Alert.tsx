import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const useStyles = makeStyles({
  root: {
    width: "400px",
    margin: "15px auto",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Erreur
        </Typography>
        <Typography variant="h5" component="h2">
          {message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClose} size="small">
          Fermer
        </Button>
      </CardActions>
    </Card>
  );
};

export default Alert;
