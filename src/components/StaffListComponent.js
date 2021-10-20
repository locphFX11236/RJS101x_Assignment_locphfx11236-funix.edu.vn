import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaffItem (props) {

    const List = props.staffs.map((staff) => {
        return ( 
           <Card key={staff.id} className="border col-6 col-md-4 text-center col-lg-2" >
                <Link to={`/staff/${staff.id}`} >
                    <CardImg src={staff.image} alt={staff.name} />
                    <CardTitle>{staff.name}</CardTitle>
                </Link>
           </Card>
        )
    });

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    {List}
                </div>
            </div>
        </div>
    )
}

function StaffList(props) {

    return (
        <div className="card">
            <nav>Danh Sách</nav>
            <main className="card-body"><RenderStaffItem staffs={props.staffs} /></main>
        </div>
    );
}

export default StaffList;