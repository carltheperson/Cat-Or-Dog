import React from 'react';
import { Route } from 'react-router';
import { MainPage } from './components/MainPage';

export default () => {
      return ( <div>
        <Route exact path='/' component={MainPage} />
      </div>
      )
}
