import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn } from '../actions';
import { signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '657339697882-s6cadj8iq2gc0b8p79ciuumtj4a67d6n.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
    else this.props.signOut();
  };

  signInHandler = () => {
    this.auth.signIn();
  };

  signOutHandler = () => {
    this.auth.signOut();
  };

  render() {
    console.log(this.props);
    if (this.props.isSignedIn) {
      return (
        <button onClick={this.signOutHandler} className='ui red google button'>
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else if (this.props.isSignedIn === false) {
      return (
        <button onClick={this.signInHandler} className='ui blue google button'>
          <i className='google icon' />
          Sign In
        </button>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
