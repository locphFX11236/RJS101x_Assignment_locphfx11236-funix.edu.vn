import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { Loading } from './LoadingComponent';

function Render({ staff }) {
    return (
        <div className="row justify-content-center card-body">
            <img className="col-12 col-md-4 col-lg-3" src={staff.image} alt={staff.name} />
            <div className="col-12 col-md-8 col-lg-9 text-left">
                <h4>Họ và tên: {staff.name}</h4>
                <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                <p>Phòng ban: {staff.department.name !== undefined ? staff.department.name : staff.department }</p>
                <p>Chức danh: {[staff.department][0].id !== undefined ? [staff.department][0].id : staff.department }</p>
                <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                <p>Số ngày đã làm thêm: {staff.overTime}</p>
            </div>
        </div>
    )
}

const  StaffDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if (props.staff != null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/staff">Staffs List</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
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