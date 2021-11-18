import React, { Component } from 'react';
import StaffList from './StaffListComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import StaffDetail from './StaffDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStaff } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        staffs: state.staffs
    }
};

const mapDispatchToProps = dispatch => ({
    addStaff: (id, name, doB, salaryScale, startDate, department, annualLeave, overTime, image) => dispatch(
        addStaff(id, name, doB, salaryScale, startDate, department, annualLeave, overTime, image)
    )
});

class Main extends Component {
    render() {

        const StaffWithId = ({match}) => {
            return(
                <StaffDetail
                    staff={this.props.staffs.filter(
                        (staff) => staff.id === parseInt(match.params.staffId,10)
                    )[0]}
                />
            )
        };

        return (
            <div>
                <Header />
                <Switch className="main">
                    <Route exact path='/staff' component={
                        () => <StaffList
                            staffs={this.props.staffs}
                            addStaff={this.props.addStaff}
                        />
                    } />

                    <Route path='/staff/:staffId' component={StaffWithId}/>

                    <Route exact path='/department' component={
                        () => <Department
                            departs={ this.props.staffs.map( (staff) => [staff.id, staff.department] ) }
                        />
                    } />

                    <Route exact path='/salary' component={
                        () => <Salary
                            staffs={this.props.staffs}
                        />
                    } />
                    
                    <Redirect to="/staff" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));