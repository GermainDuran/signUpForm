import React, { Fragment } from 'react'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      password: '',
      age: '',
      email:'',
      confirmation:false,
      signedUp: true
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ signedUp: false })
  }

  handleSubmit2 = e => {
    e.preventDefault()
    this.setState({ signedUp: true })
  }
  handleAlert = e => {
    e.preventDefault()

    alert(this.state.firstname +","+" Are you sure you want to sign up? if so, please press OK/close to continue the submission.")
    this.setState({confirmation: true})
  }
  render() {
    return (
      <div>
      <Fragment>
      {this.state.confirmation ?   <div style={{marginTop: '20%'}}> <h3>Thank you for signing up, {this.state.firstname} {this.state.lastname}!!</h3> </div>:
        <div style={{marginTop: '10%'}} className="row">
            {this.state.signedUp ? <form onSubmit={this.handleSubmit} className="col s12 m4 offset-m4">
            <div className="card">
              <div className="card-action deep-purple #26a69a teal lighten-1">
                <h3>Sign Up</h3>
              </div>
              <div className="card-content">
                <div className="form-field">
                  <input onChange={this.handleChange} type='text' name="email" placeholder="Email" value={this.state.email} required autoComplete="off" />
                </div><br />

                <div className="form-field">
                  <input onChange={this.handleChange} type='password' name="password" placeholder="Password" value={this.state.password} required autoComplete="off" />
                </div><br />

                <div className="form-field">
                  <button className="btn-large waves-effect waves-dark #4db6ac teal lighten-1" type="submit" style={{width: '100%', fontFamily: 'Hammersmith One, sans-serif'}}>
                      Next
                  </button>

                </div>
              </div>
            </div>
          </form> : <form onSubmit={this.handleAlert} className="col s12 m4 offset-m4">
          <div className="card">
            <div className="card-action deep-purple #26a69a teal lighten-1">
              <h3>Sign Up </h3>
            </div>
            <div className="card-content">
              <div className="form-field">
                <input onChange={this.handleChange} type='text' name="firstname" placeholder="First Name" value={this.state.firstname} required autoComplete="off" />
              </div><br />
              <div className="form-field">
                <input onChange={this.handleChange} type='text' name="lastname" placeholder="Last Name" value={this.state.lastname} required autoComplete="off" />
              </div><br />
              <div className="form-field">
                <input onChange={this.handleChange} type='text' name="age" placeholder="Age" value={this.state.age} required autoComplete="off" />
              </div><br />

              <div className="form-field">
                <button onClick={this.handleSubmit2} className="btn-large waves-effect waves-dark #4db6ac teal lighten-1" type="submit" style={{width: '100%', fontFamily: 'Hammersmith One, sans-serif'}}>
                  Go back
                </button>
                <button className="btn-large waves-effect waves-dark #4db6ac teal lighten-1" type="submit" style={{width: '100%', fontFamily: 'Hammersmith One, sans-serif'}}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form> }
        </div>}
      </Fragment>
      </div>
    )
  }
}


export default Dashboard
