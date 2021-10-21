import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staff">Staffs List</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Salary</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {List}
            </div>
        </div>
    )
}

export default Salary;