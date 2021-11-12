import React, { Component } from 'react';
import { Card, CardImg, CardText } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem, Form,
    Modal, ModalHeader, ModalBody,
    Button, Row, Col, Label, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaffItem ({ staffs, searchs }) {
    let Items = staffs
    if (searchs.length !== 0) { Items = searchs }
    const List = Items.map((staff) => {
        return ( 
           <Card key={staff.id} className="border col-6 col-md-4 col-lg-2" >
                <Link to={`/staff/${staff.id}`} >
                    <CardImg src={staff.image} alt={staff.name} />
                    <CardText>{staff.name}</CardText>
                </Link>
           </Card>
        )
    });

    return (
        <div className="container">
            <div className="row justify-content-center card-body">
                {List}
            </div>
        </div>
    )
}

class StaffList extends Component  {

    constructor(props) {
        super(props);
    
        this.state = {
            isModalOpen: false,
            searchs: [],
            staffs: this.props.staffs,
            newStaff: {
                id: '',
                name: '',
                doB: '',
                salaryScale: 0,
                startDate: '',
                department: '',
                annualLeave: 0,
                overTime: 0,
            }
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const NewStaff = this.state.newStaff;
        this.setState({
            newStaff: {
                id: this.state.staffs.length,
                name: NewStaff.name,
                doB: NewStaff.doB,
                salaryScale: NewStaff.salaryScale,
                startDate: NewStaff.startDate,
                department: NewStaff.department,
                annualLeave: NewStaff.annualLeave,
                overTime: NewStaff.overTime,
                image: '/assets/images/alberto.png',
                
                [name]: value
            }
        });
    }

    handleSubmit(e) {
        this.setState({
            staffs: this.state.staffs.concat([this.state.newStaff])
        });
        alert('Current State is: ' + JSON.stringify(this.state.newStaff));
        this.toggleModal();
        e.preventDefault();
    }

    handleSearch(e) {
        this.setState({
            searchs: this.props.staffs.filter(
                (staff) => staff.name.toLowerCase().includes(this.search.value)
            )
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                { console.log(this.state.staffs) }
                { console.log(this.state.newStaff) }
                <Row className="justify-content-between">
                    <Breadcrumb>
                        <BreadcrumbItem active>Staffs List</BreadcrumbItem>
                    </Breadcrumb>
                    <Button outline onClick={this.toggleModal}>Thêm nhân viên</Button>
                    <Form onSubmit={this.handleSearch} className="row col-12 col-md-5 justify-content-end" >
                        <Input className="col-10" type="search" placeholder="Search"
                         innerRef={(input) => this.search = input}/>
                        <Button className="col-2" type="submit">
                            <i class="fa fa-search"></i>
                        </Button>
                    </Form>
                </Row>
                <RenderStaffItem staffs={this.state.staffs} searchs={this.state.searchs}/>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                            <Row className="form-group m-2">
                                <Label htmlFor="name" md={5}>Nhập tên</Label>
                                <Col md={7}>
                                    <Input type="text" name="name"
                                        placeholder="Nhập tên"
                                        className="form-control"
                                        value={this.state.newStaff.name}
                                        onChange={this.handleInputChange}
                                    />
                                    { console.log(this.state.newStaff.name) }
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="doB" md={5}>Ngày sinh</Label>
                                <Col md={7}>
                                    <Input name="doB"
                                        type="date"
                                        placeholder="Ngày sinh"
                                        className="form-control"
                                        value={this.state.newStaff.doB}
                                        onChange={this.handleInputChange}
                                    />
                                    { console.log(this.state.newStaff.doB) }
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="salaryScale" md={5}>Hệ số lương</Label>
                                <Col md={7}>
                                    <Input type="number" name="salaryScale"
                                        placeholder="Hệ số lương"
                                        className="form-control"
                                        value={this.state.newStaff.salaryScale}
                                        onChange={this.handleInputChange}
                                    />
                                    { console.log(this.state.newStaff.salaryScale) }
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="startDate" md={5}>Ngày vào công ty</Label>
                                <Col md={7}>
                                    <Input name="startDate"
                                        type="date"
                                        placeholder="Ngày vào công ty"
                                        className="form-control"
                                        value={this.state.newStaff.startDate}
                                        onChange={this.handleInputChange}
                                    />
                                    { console.log(this.state.newStaff.startDate) }
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="department" md={5}>Phòng ban</Label>
                                <Col md={7}>
                                    <Input type="text" name="department"
                                        placeholder="Phòng ban"
                                        className="form-control"
                                        value={this.state.newStaff.department}
                                        onChange={this.handleInputChange}
                                    />
                                    { console.log(this.state.newStaff.department) }
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="annualLeave" md={5}>Số ngày nghỉ còn lại</Label>
                                <Col md={7}>
                                    <Input type="number" name="annualLeave"
                                        placeholder="Số ngày nghỉ còn lại"
                                        className="form-control"
                                        value={this.state.newStaff.annualLeave}
                                        onChange={this.handleInputChange}
                                    />
                                    { console.log(this.state.newStaff.annualLeave) }
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="overTime" md={5}>Số ngày đã làm thêm</Label>
                                <Col md={7}>
                                    <Input type="number" name="overTime"
                                        placeholder="Số ngày đã làm thêm"
                                        className="form-control"
                                        value={this.state.newStaff.overTime}
                                        onChange={this.handleInputChange}
                                    />
                                    { console.log(this.state.newStaff.overTime) }
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Col md={{size:8, offset: 4}}>
                                    <Button type="submit" color="primary">
                                        Thêm nhân viên
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default StaffList;