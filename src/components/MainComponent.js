import React, { Component } from 'react';
import StaffList from './StaffListComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import StaffDetail from './StaffdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { STAFFS } from '../shared/staffs.jsx';
import { DEPARTMENTS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
            staffs: STAFFS,
            department: DEPARTMENTS,
        }
    }

    render() {

        const StaffWithId = ({match}) => {
            return(
                <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))}
                 department={this.state.department} />
            )
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/staff' component={() => <StaffList staffs={this.state.staffs} />} />
                    <Route path='/staff/:staffId' component={StaffWithId} />
                    <Route exact path='/department' component={() => <Department departs={this.state.staffs.map((staff) => staff.department)} />} />
                    <Route exact path='/salary' component={() => <Salary staffs={this.state.staffs} />} />
                    <Redirect to="/staff" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;