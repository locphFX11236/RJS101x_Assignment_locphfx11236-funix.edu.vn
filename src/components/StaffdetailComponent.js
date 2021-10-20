import React from 'react';
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from 'dateformat';

function Render({ staff, department }) {
    return (
        <div>
            <img className="col-12 col-md-5 col-lg-3 m-1" src={staff.image} alt={staff.name} />
            <div className="col-12 col-md-5 col-lg-3 m-1">
                <h4>Họ và tên: {staff.name}</h4>
                <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                <p>Ngày vào công ty: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                <p>Phòng ban: {staff.department.name}</p>
                <p>Chức danh: {staff.department.id}</p>
                <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                <p>Số ngày đã làm thêm: {staff.overTime}</p>
            </div>
        </div>
    )
}

const  StaffDetail = (props) => {
    if (props.staff != null) {
        return(
            <div className="container">
                <div className="row">
                    Breadcrumb
                    {/* <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb> */}
                </div>
                <div className="row">
                    <Render staff={props.staff} department={props.department} />
                </div>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default StaffDetail;