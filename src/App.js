import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';

const Styles = (theme) => ({
  root: {
    maxWidth: 250,

  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'blue'
  },

  btn: {

    justifyContent: 'center',

  }
});

class App extends React.Component {

  state = {
    input1Value: '',
    input2Value: '',
    helperText1: '',
    helperText2: '',
    error: '',
    error1: ''

  };
  onInputChange = (event, prop) => {
    this.setState({ [prop]: event.target.value, });
    console.log(prop)
  }

  changeHelptext = () => {

    if (this.state.input1Value.length < 8) {
      this.setState({ helperText1: 'min character 8' })
      this.setState({ error1: Error })
    }
    else {
      this.setState({ helperText1: '' })
      this.setState({ error1: '' })
    }
    if (this.state.input2Value.length < 8) {
      this.setState({ helperText2: 'min character 8' })
      this.setState({ error: Error })
    }
    else {
      this.setState({ helperText2: '' })
      this.setState({ error: '' })
    }

  }

  render() {
    const { classes } = this.props;
    const { input1Value, input2Value, helperText1, helperText2, error, error1 } = this.state;
    return (

      <Modal className={classes.modal}

        open>

        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title}
              color="textSecondary" >
              Login
          </Typography>
            <TextField
              error={error1}
              value={input1Value} onChange={(event) => this.onInputChange(event, 'input1Value')}
              helperText={helperText1}
              id="standard-basic"
              label="Email" />

            <TextField
              error={error}
              value={input2Value} onChange={(event) => this.onInputChange(event, 'input2Value')}
              id="standard-password-input"
              label="Passord"
              type="password"
              autoComplete="current-password"
              helperText={helperText2} />
          </CardContent>

          <CardActions className={classes.btn} >
            <Button
              disabled={!(input1Value.length >= 2 && input2Value.length >= 2)}
              onClick={this.changeHelptext}
              size="small"
              variant="outlined" color="primary">
              login
          </Button>
          </CardActions>
        </Card>
      </Modal>
    );
  }
}
export default withStyles(Styles)(App);
