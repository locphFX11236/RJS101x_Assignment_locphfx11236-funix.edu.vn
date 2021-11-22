import React, { Component } from 'react';
import { Card, CardImg, CardText } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem,
    Modal, ModalHeader, ModalBody,
    Button, Row, Col, Label, Input
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

function RenderStaffItem ( {staffs, searchs} ) {
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

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

class StaffList extends Component  {

    constructor(props) {
        super(props);
    
        this.state = {
            isModalOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        const addStaff = {
            type: 'ADD_STAFF',
            payload: {
                id: this.props.staffs.length,
                name: values.name,
                doB: values.doB,
                salaryScale: Number(values.salaryScale),
                startDate: values.startDate,
                department: values.department,
                annualLeave: Number(values.annualLeave),
                overTime: Number(values.overTime),
                image: '/assets/images/alberto.png'
            }
        };
        this.props.addStaff(addStaff);
        this.toggleModal();
    }

    handleSearch() {
        const searchStaff = {
            type: 'SEARCH_STAFF',
            payload: this.search.value
        };
        this.props.searchStaff(searchStaff)
    }

    render() {
        return (
            <div className="container">
                <Row className="justify-content-between">
                    <Breadcrumb>
                        <BreadcrumbItem active>Staffs List</BreadcrumbItem>
                    </Breadcrumb>
                    <Button outline onClick={this.toggleModal}>Thêm nhân viên</Button>
                    <Row className="col-12 col-md-5 justify-content-end" >
                        <Input className="col-10" type="search" placeholder="Search"
                         innerRef={(input) => this.search = input}/>
                        <Button className="col-2" type="button"
                         onClick={this.handleSearch}>
                            <i class="fa fa-search"></i>
                        </Button>
                    </Row>
                </Row>
                <RenderStaffItem staffs={this.props.staffs} searchs={this.props.searchs}/>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group m-2">
                                <Label htmlFor="name" md={5}>Nhập tên</Label>
                                <Col md={7}>
                                    <Control.text model=".name" name="name"
                                        placeholder="Nhập tên"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                     />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Không bỏ trống. ',
                                            minLength: 'Phải dài hơn 2 kí tự.',
                                            maxLength: 'Phải ít hơn 16 kí tự.'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="doB" md={5}>Ngày sinh</Label>
                                <Col md={7}>
                                    <Control.text model=".doB" name="doB"
                                        type="date"
                                        placeholder="Ngày sinh"
                                        className="form-control"
                                        validators={{ required }}
                                     />
                                    <Errors
                                        className="text-danger"
                                        model=".doB"
                                        show="touched"
                                        messages={{ required: 'Không bỏ trống.' }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="salaryScale" md={5}>Hệ số lương</Label>
                                <Col md={7}>
                                    <Control.text model=".salaryScale" name="salaryScale"
                                        placeholder="Hệ số lương"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                     />
                                    <Errors
                                        className="text-danger"
                                        model=".salaryScale"
                                        show="touched"
                                        messages={{
                                            required: 'Không bỏ trống. ',
                                            isNumber: 'Phải là một số.'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="startDate" md={5}>Ngày vào công ty</Label>
                                <Col md={7}>
                                    <Control.text model=".startDate" name="startDate"
                                        type="date"
                                        placeholder="Ngày vào công ty"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                     />
                                    <Errors
                                        className="text-danger"
                                        model=".startDate"
                                        show="touched"
                                        messages={{
                                            required: 'Không bỏ trống.'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="department" md={5}>Phòng ban</Label>
                                <Col md={7}>
                                    <Control.text model=".department" name="department"
                                        placeholder="Phòng ban"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".department"
                                        show="touched"
                                        messages={{
                                            required: 'Không bỏ trống.'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="annualLeave" md={5}>Số ngày nghỉ còn lại</Label>
                                <Col md={7}>
                                    <Control.text model=".annualLeave" name="annualLeave"
                                        placeholder="Số ngày nghỉ còn lại"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                     />
                                    <Errors
                                        className="text-danger"
                                        model=".annualLeave"
                                        show="touched"
                                        messages={{
                                            required: 'Không bỏ trống. ',
                                            isNumber: 'Phải là một số.'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="overTime" md={5}>Số ngày đã làm thêm</Label>
                                <Col md={7}>
                                    <Control.text model=".overTime" name="overTime"
                                        placeholder="Số ngày đã làm thêm"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                     />
                                    <Errors
                                        className="text-danger"
                                        model=".overTime"
                                        show="touched"
                                        messages={{
                                            required: 'Không bỏ trống. ',
                                            isNumber: 'Phải là một số.'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Col md={{size:8, offset: 4}}>
                                    <Button type="submit" color="primary">
                                        Thêm nhân viên
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default StaffList;