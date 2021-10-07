import React, { Component } from 'react';
import { STAFFS } from '../shared/staffs.jsx';
import dateFormat from 'dateformat';
import Respon from './ResponsiveComponents';
import ReactDOM from 'react-dom';

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
            return (
                <div className="border col-12 col-md-6 m-1">
                    <h4>Họ và tên: {staff.name}</h4>
                    <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                    <p>Phòng ban: {staff.department.name}</p>
                    <p>Chức danh: {staff.department.id}</p>
                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {staff.overTime}</p>
                </div>
            )
        } else {
            return(
                <div><p>Bấm vào tên nhân viên để xem thông tin</p></div>
            );
        }
    }

    render() {

        const List = this.state.staffs.map((staff) => {
            return (
               <div key={staff.id} id="MList" className="border col-12 col-md-5 col-lg-3 m-1 text-center" onClick={() => this.onListSelect(staff)}>
                   {staff.name}
               </div> 
            )
        });

        return (
            <div className="container">
                <div className="row justify-content-center">
                    {List}
                </div>
                <br /><hr />
                <div className="row justify-content-center">
                    {this.renderSelectList(this.state.selectedList)}
                </div>
                <Respon id="MList" />
            </div>
        );
    }
}

export default StaffList;