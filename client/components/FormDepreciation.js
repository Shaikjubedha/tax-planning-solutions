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

export class FormDepreciation extends Component {
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
          <AppBar title="Depreciation and Amortization" />
          <TextField
            hintText="Current Depreciation"
            floatingLabelText="Year-To-Date Depreciation"
            onChange={handleChange('curDep')}
            defaultValue={values.curDep}
          />
          <br />
          <TextField
            hintText="Current Amortization"
            floatingLabelText="Year-To-Date Amortization"
            onChange={handleChange('curAmort')}
            defaultValue={values.curAmort}
          />
          <br />
          <TextField
            hintText="Annual Depreciation"
            floatingLabelText="Annual Depreciation (If Known)"
            onChange={handleChange('totalDep')}
            defaultValue={values.totalDep}
          />
          <br />
          <TextField
            hintText="Annual Amortization"
            floatingLabelText="Annual Amortization (If Known)"
            onChange={handleChange('totalAmort')}
            defaultValue={values.totalAmort}
          />
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

export default FormDepreciation
