import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffListComponent';


class App extends Component {

  render() {
    return (
      <div className="App card">
        <Navbar dark color="primary">
          <div className="container card-header">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <nav>Danh Sách</nav>
        <main className="card-body"><StaffList /></main>
        <footer className="card-footer align-items-end"></footer>
      </div>
    );
  }
}

export default App;