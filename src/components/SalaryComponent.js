import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Luong({salaryScale, overTime}) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    let salary = (parseFloat(salaryScale) * basicSalary) + (parseFloat(overTime) * overTimeSalary) ;
    return Math.round(salary)
}

const Salary = (props) => {
    const List = props.staffs.map((staff) => {
        return ( 
            <div className="border col-12 col-md-5 col-lg-3 m-1">
                <h3>{staff.name}</h3>
                <p>Mã nhân viên: {staff.id}</p>
                <p>Hệ số lương: {staff.salaryScale}</p>
                <p>Số giờ làm thêm: {staff.overTime}</p>
                <p className="border">Lương: <Luong salaryScale={staff.salaryScale} 
                 overTime={staff.overTime}
                /></p>
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
            <div className="row justify-content-center card-body">
                {List}
            </div>
        </div>
    )
}

export default Salary;