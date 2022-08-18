import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {  Homepage, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
{/* Donde va el contenido principal */}
    <div className="main">
      <Layout>
        <div className="routes">
          {/* interruptor,te permite  tener multiples rutas(route) */}
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            {/* componente dinamico */}
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
          </Switch>
        </div>
      </Layout>
{/* Pie de pagina */}
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
          <Link to="/">
            Adam Power.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
