import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  button: {
    margin: 15
  }
}

export class FormIncome extends Component {
  continue = event => {
    event.preventDefault()
    this.props.nextStep() //passed from parent component (UserForm)
  }

  render() {
    const {values, handleChange} = this.props
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Income" />
          <TextField
            hintText="Net Income"
            floatingLabelText="Year-To-Date Net Income"
            onChange={handleChange('netIncome')}
            defaultValue={values.netIncome}
          />
          <br />
          <TextField
            hintText="Significant Income"
            floatingLabelText="Unusual Or Significant Income"
            onChange={handleChange('sigInc')}
            defaultValue={values.sigInc}
          />
          <br />
          <TextField
            hintText="Significant Expenses"
            floatingLabelText="Unusual Or Significant Expenses"
            onChange={handleChange('sigExp')}
            defaultValue={values.sigExp}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true} //coloring
            styles={styles.button} //styling
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormIncome
