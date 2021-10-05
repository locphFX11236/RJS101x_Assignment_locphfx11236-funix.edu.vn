import React, { Component } from 'react';
import STAFFS from '../shared/staffs';

class StaffList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            staffs : STAFFS
        };
    }
    
    render() {

        const List = this.props.staffs.map((sta) => {
            return (
               <div key={sta.id} className="col-12 col-md-5 m-1">
                   {sta.name}
               </div> 
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {List}
                </div>
                <div className="row">
                    {}
                </div>
            </div>
        );
    }
}

export default StaffList;