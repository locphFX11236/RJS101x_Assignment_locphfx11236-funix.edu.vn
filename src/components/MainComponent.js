import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import StaffList from './StaffListComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import StaffDetail from './StaffDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { addStaff, fetchStaffs, fetchDeparts, fetchSalarys } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departs: state.departs,
        salarys: state.salarys
    }
};

const mapDispatchToProps = dispatch => ({
    addStaff: ( newStaff ) => dispatch( addStaff( newStaff ) ),
    fetchStaffs: () => { dispatch( fetchStaffs() ) },
    resetModalForm: () => { dispatch( actions.reset( 'modalForm' ) ) },
    fetchDeparts: () => { dispatch( fetchDeparts() ) },
    fetchSalarys: () => { dispatch( fetchSalarys() ) }
});

class Main extends Component {
    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDeparts();
        this.props.fetchSalarys()
    }

    render() {

        const StaffWithId = ({match}) => {
            return(
                <StaffDetail
                    staff={this.props.staffs.staffs.filter(
                        (staff) => staff.id === parseInt(match.params.staffId,10)
                    )[0]}
                    isLoading={this.props.staffs.isLoading}
                    errMess={this.props.staffs.errMess}
                />
            )
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch className="main" location={this.props.location}>
                            <Route exact path='/staff' component={
                                () => <StaffList
                                    staffs={this.props.staffs}
                                    staffsLoading={this.props.staffs.isLoading}
                                    staffsErrMess={this.props.staffs.errMess}
                                    addStaff={this.props.addStaff}
                                    resetModalForm={this.props.resetModalForm}
                                />
                            } />

                            <Route path='/staff/:staffId' component={StaffWithId}/>

                            <Route exact path='/department' component={
                                () => <Department
                                    departs={ this.props.departs }
                                    departsLoading={ this.props.departs.isLoading }
                                    departsErrMess={ this.props.departs.errMess }
                                />
                            } />

                            <Route exact path='/salary' component={
                                () => <Salary
                                    salarys={ this.props.salarys }
                                    salarysLoading={ this.props.salarys.isLoading }
                                    salarysErrMess={ this.props.salarys.errMess }
                                />
                            } />
                            
                            <Redirect to="/staff" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));