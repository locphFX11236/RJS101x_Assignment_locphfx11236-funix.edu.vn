import React from 'react';
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from 'dateformat';

function Render({ staff }) {
    return (
        <div className="row">
            <img className="col-12 col-md-4 col-lg-3" src={staff.image} alt={staff.name} />
            <div className="col-12 col-md-8 col-lg-9 text-left">
                <h4>Họ và tên: {staff.name}</h4>
                <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                <p>Ngày vào công ty: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                <p>Phòng ban: {staff.department.name}</p>
                <p>Chức danh: {[staff.department][0].id}</p>
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
                <Render staff={props.staff}/>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default StaffDetail;