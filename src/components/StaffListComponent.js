import React, { Component } from 'react';
import { STAFFS } from '../shared/staffs.jsx';
import dateFormat from 'dateformat';

class StaffList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            staffs : STAFFS,
            selectedList : null
        };
    }
    
    onListSelect(staff) {
        this.setState({ selectedList: staff});
    }

    renderSelectList (staff) {
        if (staff != null) {
            
        } else {
            return(
                <div><p>Bấm vào tên nhân viên để xem thông tin</p></div>
            );
        }
    }

    render() {

        const List = this.state.staffs.map((staff) => {
            return (
               <div key={staff.id}>
                   {staff.name}
               </div> 
            )
        });

        return (
            <div>
                <div>
                    {List}
                </div>
                <div>
                    {this.renderSelectList(this.state.selectedList)}
                </div>
            </div>
        );
    }
}

export default StaffList;