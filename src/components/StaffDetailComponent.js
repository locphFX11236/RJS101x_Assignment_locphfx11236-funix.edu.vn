import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { Loading } from './LoadingComponent';
import { localUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function Render({ staff }) {
    return (
        <FadeTransform in transformProps={ { exitTransform: 'scale(0.5) translateY(-50%)' } }>
            <div className="row justify-content-center card-body">
                <img className="col-12 col-md-4 col-lg-3" width="100%" src={ localUrl + staff.image } alt={ staff.name } />
                <div className="col-12 col-md-8 col-lg-9 text-left">
                    <Stagger in>
                        <h4>Họ và tên: { staff.name }</h4>
                        <Fade in>
                            <p>Ngày sinh: { dateFormat( staff.doB, "dd/mm/yyyy" ) }</p>
                            <p>Ngày vào công ty: { dateFormat( staff.startDate, "dd/mm/yyyy" ) }</p>
                            {/* <p>Phòng ban: { staff.departmentId }</p> */}
                            <p>Số ngày nghỉ còn lại: { staff.annualLeave }</p>
                            <p>Số ngày đã làm thêm: { staff.overTime }</p>
                        </Fade>
                    </Stagger>
                </div>
            </div>
        </FadeTransform>
    )
}

const  StaffDetail = ( props ) => {
    function DeleteStaff () {
        return props.deleteStaff(props.staff.id)
    }

    const UpdateStaff = () => {
        return props.patchStaff(props.staff.id)
    }

    if ( props.isLoading ) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    } else if ( props.errMess ) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{ props.errMess }</h4>
                </div>
            </div>
        );
    } else if ( props.staff !== undefined ) {    
        return(
            <div className="container">
                <Row className="justify-content-between">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/staff">Staffs List</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{ props.staff.name }</BreadcrumbItem>
                    </Breadcrumb>
                    <Button outline onClick={UpdateStaff}>
                        Cập nhật thông tin nhân viên
                    </Button>
                    <Button outline onClick={DeleteStaff}>
                        <Link to="/staff">Xóa nhân viên</Link>
                    </Button>
                </Row>
                <Render staff={ props.staff }/>
            </div>
        )
    } else {
        return(
            <div className="container">
                <Row className="justify-content-between">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/staff">Staffs List</Link></BreadcrumbItem>
                    </Breadcrumb>
                </Row>
                <div  className="card-body">
                    <h2>Không có thông tin</h2>
                    <Link to="/staff">Quay lại trang chủ</Link>
                </div>
            </div>
        )
    }
}

export default StaffDetail;