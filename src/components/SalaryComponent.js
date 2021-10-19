import React from 'react';
import { Card } from 'reactstrap';

const Salary = (props) => {
    const List = props.staffs.map((staff) => {
        return ( 
            <div className="border col-12 col-md-6 col-lg-4">
                <h3>{staff.name}</h3>
                <p>Mã nhân viên: {staff.id}</p>
                <p>Hệ số lương: {staff.salaryScale}</p>
                <p>Số giờ làm thêm: {staff.overTime}</p>
                <p className="border">Lương: {}</p>
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                Breadcrumb
            </div>
            <div className="row">
                {List}
            </div>
        </div>
    )
}

export default Salary;