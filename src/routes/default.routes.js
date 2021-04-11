import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import CreateNews from '../pages/CreateNews';
import ShowNews from '../pages/ShowNews';
import NewsDetails from '../pages/NewsDetails';

const DefaultRoutes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/create-news" component={CreateNews} />
      <Route exact path="/news" component={ShowNews} />
      <Route exact path="/news-details" component={NewsDetails} />
    </Switch>
  </BrowserRouter>
);

export default DefaultRoutes;
