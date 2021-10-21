import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Department = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staff">Staffs List</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Department</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row justify-content-center card-body">
                <div className="border col-12 col-md-5 col-lg-3 m-1">
                    <h3>Sale</h3>
                    <p>Số lượng nhân viên: {props.departs.filter(depart => depart.name === "Sale").length}</p>
                </div>
                <div className="border col-12 col-md-5 col-lg-3 m-1">
                    <h3>HR</h3>
                    <p>Số lượng nhân viên: {props.departs.filter(depart => depart.name === "HR").length} </p>
                </div>
                <div className="border col-12 col-md-5 col-lg-3 m-1">
                    <h3>Marketing</h3>
                    <p>Số lượng nhân viên: {props.departs.filter(depart => depart.name === "Marketing").length} </p>
                </div>
                <div className="border col-12 col-md-5 col-lg-3 m-1">
                    <h3>IT</h3>
                    <p>Số lượng nhân viên: {props.departs.filter(depart => depart.name === "IT").length} </p>
                </div>
                <div className="border col-12 col-md-5 col-lg-3 m-1">
                    <h3>Finance</h3>
                    <p>Số lượng nhân viên: {props.departs.filter(depart => depart.name === "Finance").length} </p>
                </div>
            </div>
        </div>
    )
}

export default Department;