import React, { Component } from 'react';
import { Card, CardImg, CardText } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem,
    Modal, ModalHeader, ModalBody,
    Button, Row, Col, Label, Input
} from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { localUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function Render ({ staffs, searchs, searchValue }) {
    let Items = staffs.staffs
    if (searchValue !== '' || searchs.length !== 0) { Items = searchs }
    const List = Items.map((staff) => {
        return (
            <Card key={staff.id} className="border col-6 col-md-4 col-lg-2" >
                <FadeTransform in transformProps={ { exitTransform: 'scale(0.5) translateY(-50%)' } } >
                    <Link to={ `/staff/${ staff.id }` } >
                        <CardImg width="100%" src={ localUrl + staff.image } alt={ staff.name } />
                        <CardText>{ staff.name }</CardText>
                    </Link>
                </FadeTransform>
            </Card>
        )
    })

    return (
        <div className="row justify-content-center card-body">
            {List}
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
            searchs: [],
            searchValue: '',
            staffs: this.props.staffs
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
        const newStaff = {
            id: this.props.staffs,
            name: values.name,
            doB: values.doB,
            salaryScale: Number(values.salaryScale),
            startDate: values.startDate,
            department: values.department,
            annualLeave: Number(values.annualLeave),
            overTime: Number(values.overTime),
            image: '/asset/images/alberto.png'
        }
        this.props.addStaff( newStaff );
        this.toggleModal();
        this.props.resetModalForm();
    }

    handleSearch() {
        this.setState({
            searchs: this.state.staffs.staffs.filter(
                (staff) => staff.name.toLowerCase().includes(this.search.value)
            ),
            searchValue: this.search.value
        })
    }

    render() {

        if (this.props.staffs.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        } else if (this.props.staffs.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{this.props.staffs.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        } else {
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
                    <Render
                        staffs={this.props.staffs}
                        searchs={this.state.searchs}
                        searchValue={this.state.searchValue}
                    />
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                        <ModalBody>
                            <Form model="modalForm" onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group m-2">
                                    <Label htmlFor="name" md={5}>Nhập tên</Label>
                                    <Col md={7}>
                                        <Control.text model=".name" name="name"
                                            placeholder="Nhập tên"
                                            className="form-control"
                                            defaultValue="aaa"
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
                                            className="form-control"
                                            defaultValue="01/11/2021"
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
                                            type="number"
                                            placeholder="Hệ số lương"
                                            className="form-control"
                                            defaultValue="1"
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
                                            className="form-control"
                                            defaultValue="04/11/2021"
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
                                            defaultValue="IT"
                                            validators={{ required }}
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
                                            type="number"
                                            placeholder="Số ngày nghỉ còn lại"
                                            className="form-control"
                                            defaultValue="3"
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
                                            type="number"
                                            placeholder="Số ngày đã làm thêm"
                                            className="form-control"
                                            defaultValue="4"
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
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
    }
}

export default StaffList;