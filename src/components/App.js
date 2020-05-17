import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import PixieEditor from './PixieEditor';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path='/' exact component={StreamList} />
          <Route path='/stream/new' component={StreamCreate} />
          <Route path='/stream/delete/:id' component={StreamDelete} />
          <Route path='/stream/edit/:id' component={StreamEdit} />
          <Route path='/stream/:id' exact component={StreamShow} />
          <Route path='/pixie' exact component={PixieEditor} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
