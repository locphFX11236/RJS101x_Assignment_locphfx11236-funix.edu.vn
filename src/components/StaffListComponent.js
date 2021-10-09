import React, { Component } from 'react';
import { STAFFS } from '../shared/staffs.jsx';
import dateFormat from 'dateformat';

class StaffList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            staffs : STAFFS,
            selectedList : null,
            clas : "border col-12 col-md-5 text-center col-lg-3 m-1",
        };
    }

    renderClass (clas) {
        return(clas)
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

    Two() {
        this.setState({clas: "border col-12 col-md-5 text-center col-lg-5 m-1"})
    }

    Three() {
        this.setState({clas: "border col-12 col-md-5 text-center col-lg-3 m-1"})
    }

    Six() {
        this.setState({clas: "border col-12 col-md-5 text-center col-lg-2"})
    }
    
    onListSelect(staff) {
        this.setState({selectedList: staff});
    }

    render() {

        const List = this.state.staffs.map((staff) => {
            return (    
               <div key={staff.id} className={ this.renderClass(this.state.clas) } onClick={() => this.onListSelect(staff)}>
                   {staff.name}
               </div> 
            )
        });

        return (
            <div>
                <div className="mb-4 row justify-content-end" with="100%">
                    <button onClick={() => this.Two()}>2</button>
                    <button onClick={() => this.Three()}>3</button>
                    <button onClick={() => this.Six()}>6</button>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        {List}
                    </div>
                    <br /><hr />
                    <div className="row justify-content-center">
                        {this.renderSelectList(this.state.selectedList)}
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffList;