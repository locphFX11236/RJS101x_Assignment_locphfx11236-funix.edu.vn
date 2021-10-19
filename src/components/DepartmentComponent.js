import React from 'react';

const Department = (props) => {
    return (
        <div className="container">
            <div className="row">
                Breadcrumb
            </div>
            <div className="row">
                <div className="border col-12 col-md-6 col-lg-4">
                    <h3>Sale</h3>
                    <p>Số lượng nhân viên: {props.departs.filter(depart => depart.name === "Sale").length}</p>
                </div>
                <div className="border col-12 col-md-6 col-lg-4">
                    <h3>HR</h3>
                    <p>Số lượng nhân viên: {props.departs.filter(depart => depart.name === "HR").length} </p>
                </div>
                <div className="border col-12 col-md-6 col-lg-4">
                    <h3>Marketing</h3>
                    <p>Số lượng nhân viên: {props.departs.filter(depart => depart.name === "Marketing").length} </p>
                </div>
                <div className="border col-12 col-md-6 col-lg-4">
                    <h3>IT</h3>
                    <p>Số lượng nhân viên: {props.departs.filter(depart => depart.name === "IT").length} </p>
                </div>
                <div className="border col-12 col-md-6 col-lg-4">
                    <h3>Finance</h3>
                    <p>Số lượng nhân viên: {props.departs.filter(depart => depart.name === "Finance").length} </p>
                </div>
            </div>
        </div>
    )
}

export default Department;