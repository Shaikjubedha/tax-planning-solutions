import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SimplePopover from './Popover'

const styles = {
  button: {
    margin: 15
  }
}

export class FormBonus extends Component {
  continue = event => {
    event.preventDefault()
    this.props.nextStep() //passed from parent component (UserForm)
  }

  back = event => {
    event.preventDefault()
    this.props.prevStep() //passed from parent component (UserForm)
  }

  render() {
    const {values, handleChange} = this.props
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Wages & Bonuses" />
          <TextField
            hintText="Bonus Paid"
            floatingLabelText="Year-To-Date Bonuses Paid"
            onChange={handleChange('curBonus')}
            defaultValue={values.curDep}
          />
          <br />
          <TextField
            hintText="Total Bonuses"
            floatingLabelText="Total Bonuses Anticipated"
            onChange={handleChange('totalBonus')}
            defaultValue={values.totalBonus}
          />
          <br />
          <TextField
            hintText="Retirement Contribution"
            floatingLabelText="Contributions To Retirement Plans"
            onChange={handleChange('totalDep')}
            defaultValue={values.totalDep}
          />
          {/* <SimplePopover /> */}
          <br />
          <RaisedButton
            label="Back"
            primary={true} //coloring
            styles={styles.button} //styling
            onClick={this.back}
          />{' '}
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

export default FormBonus
