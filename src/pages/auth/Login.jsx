import React, { Component } from 'react';
import FormLogin from '../../components/auth/FormLogin';
import SideImage from '../../components/auth/SideImage';

class Login extends Component {
  render() {
    return (
      <div className='rubik'>
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 text-black">
                <FormLogin />
              </div>
              <SideImage />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Login;
