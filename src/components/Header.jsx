import React from 'react';
import { Images } from '../constants';

const Header = () => {
  return (
    <section>
      <header>
        <div>
        <img src={Images.logo} alt="logo" />
        </div>
        <div></div>
      </header>
    </section>
  )
}

export default Header