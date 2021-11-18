import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Render ({departs}) {
    console.log({departs})
    const Count = x => departs.filter(depart => {
        return (
            depart[1].name !== undefined ?
            depart[1].name === x :
            depart[1] === x
        )
    }).length;
    const Items = ["Sale", "HR", "Marketing", "IT", "Finance"];
    const List = Items.map((Item) => {
        return (
            <div className="border col-12 col-md-5 col-lg-3 m-1">
                <h3>{ Item }</h3>
                <p>Số lượng nhân viên: { Count(Item) }</p>
            </div>
        )
    })

    return (
        <div className="row justify-content-center card-body">
            {List}
        </div>
    )
}

const Department = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staff">Staffs List</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Department</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <Render departs={props.departs} />
        </div>
    )
}

export default Department;