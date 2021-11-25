import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function Render ( {departs} ) {
    const List = departs.departs.map((depart) => {
        return (
            <div className="border col-12 col-md-5 col-lg-3 m-1">
                <h3>{ depart.name }</h3>
                <p>Số lượng nhân viên: { depart.numberOfStaff }</p>
            </div>
        )
    })

    return (
        <div className="row justify-content-center card-body">
            {List}
        </div>
    )
}

const Department = ( props ) => {
    if ( props.departs.isLoading ) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    } else if ( props.departs.errMess ) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{ props.departs.errMess }</h4>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/staff">Staffs List</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Department</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <Render departs={ props.departs } />
            </div>
        )
    }
}

export default Department;