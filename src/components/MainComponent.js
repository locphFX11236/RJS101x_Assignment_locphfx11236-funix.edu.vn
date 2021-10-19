import React, { Component } from 'react';
import StaffList from './StaffListComponent';
import Department from './DepartmentComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { STAFFS } from '../shared/staffs.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
            staffs : STAFFS,
            selectedList : null,
            clas : "border col-12 col-md-5 text-center col-lg-3 m-1"
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/staff' component={() => <StaffList staffs={this.state.staffs} />} />
                    {/* <Route path='/staff/:dishId' component={} /> */}
                    <Route exact path='/department' component={() => <Department departs={this.state.staffs.map((staff) => staff.department)} />} />
                    {/* <Route exact path='/salary' component={Salary} /> */}
                    <Redirect to="/staff" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;