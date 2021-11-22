import React, { Component } from 'react';
import { Card, CardImg, CardText } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem, Form, FormFeedback,
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
            newStaff: {
                id: '',
                name: '',
                doB: '',
                salaryScale: '',
                startDate: '',
                department: '',
                annualLeave:'',
                overTime: '',
            },
            touched: {
                name: false,
                doB: false,
                salaryScale: false,
                startDate: false,
                department: false,
                annualLeave: false,
                overTime: false,
            }
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this)
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        })
    }

    handleBlur = (field) => (e) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
        e.preventDefault();
    }

    handleInputChange = (field) => (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        const NewStaff = this.state.newStaff;
        this.setState({
            newStaff: {
                ...NewStaff,
                [field]: NewStaff[field],
                id: this.props.staffs.length,
                image: '/assets/images/alberto.png',

                [name]: value
            }
        });
    }

    validate(name, doB, salaryScale, startDate, department, annualLeave, overTime) {
        const errors = {
            name: '',
            doB: '',
            salaryScale: '',
            startDate: '',
            department: '',
            annualLeave:'',
            overTime: '',
        };
    
        if (this.state.touched.name && name.length < 3)
            errors.name = 'Tên phải lớn hơn 2 ký tự';
        else if (this.state.touched.name && name.length > 15)
            errors.name = 'Tên phải nhỏ hơn 16 ký tự';
        
        if (this.state.touched.doB && doB.length === 0)
            errors.doB = 'Vui lòng nhập';

        if (this.state.touched.startDate && startDate.length === 0)
            errors.startDate = 'Vui lòng nhập';

        if (this.state.touched.department && department.length === 0)
            errors.department = 'Vui lòng nhập';
        
        const reg = /^\d+$/;
        if (this.state.touched.salaryScale && !reg.test(salaryScale))
            errors.salaryScale = 'Vui lòng nhập, chỉ bao gồm số';

        if (this.state.touched.annualLeave && !reg.test(annualLeave))
            errors.annualLeave = 'Vui lòng nhập, chỉ bao gồm số';

        if (this.state.touched.overTime && !reg.test(overTime))
            errors.overTime = 'Vui lòng nhập, chỉ bao gồm số';
        
        return errors;
    }

    handleSubmit(e) {
        const addStaff = {
            type: 'ADD_STAFF',
            payload: this.state.newStaff
        };
        this.props.addStaff(addStaff);
        this.toggleModal();
        e.preventDefault();
    }

    handleSearch(e) {
        const searchStaff = {
            type: 'SEARCH_STAFF',
            payload: this.search.value
        };
        this.props.searchStaff(searchStaff);
        e.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.newStaff.name, this.state.newStaff.doB, this.state.newStaff.salaryScale,
         this.state.newStaff.startDate, this.state.newStaff.department, this.state.newStaff.annualLeave, this.state.newStaff.overTime);

        return (
            <div className="container">
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
                <RenderStaffItem staffs={this.props.staffs} searchs={this.props.searchs}/>
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
                                        valid={errors.name === ''}
                                        invalid={errors.name !== ''}
                                        onBlur={this.handleBlur('name')}
                                        onChange={this.handleInputChange('name')}
                                    />
                                    <FormFeedback>{errors.name}</FormFeedback>
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
                                        valid={errors.doB === ''}
                                        invalid={errors.doB !== ''}
                                        onBlur={this.handleBlur('doB')}
                                        onChange={this.handleInputChange('doB')}
                                    />
                                    <FormFeedback>{errors.doB}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="salaryScale" md={5}>Hệ số lương</Label>
                                <Col md={7}>
                                    <Input type="number" name="salaryScale"
                                        placeholder="Hệ số lương"
                                        className="form-control"
                                        value={this.state.newStaff.salaryScale}
                                        valid={errors.salaryScale === ''}
                                        invalid={errors.salaryScale !== ''}
                                        onBlur={this.handleBlur('salaryScale')}
                                        onChange={this.handleInputChange('salaryScale')}
                                    />
                                    <FormFeedback>{errors.salaryScale}</FormFeedback>
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
                                        valid={errors.startDate === ''}
                                        invalid={errors.startDate !== ''}
                                        onBlur={this.handleBlur('startDate')}
                                        onChange={this.handleInputChange('startDate')}
                                    />
                                    <FormFeedback>{errors.startDate}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="department" md={5}>Phòng ban</Label>
                                <Col md={7}>
                                    <Input type="text" name="department"
                                        placeholder="Phòng ban"
                                        className="form-control"
                                        value={this.state.newStaff.department}
                                        valid={errors.department === ''}
                                        invalid={errors.department !== ''}
                                        onBlur={this.handleBlur('department')}
                                        onChange={this.handleInputChange('department')}
                                    />
                                    <FormFeedback>{errors.department}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="annualLeave" md={5}>Số ngày nghỉ còn lại</Label>
                                <Col md={7}>
                                    <Input type="number" name="annualLeave"
                                        placeholder="Số ngày nghỉ còn lại"
                                        className="form-control"
                                        value={this.state.newStaff.annualLeave}
                                        valid={errors.annualLeave === ''}
                                        invalid={errors.annualLeave !== ''}
                                        onBlur={this.handleBlur('annualLeave')}
                                        onChange={this.handleInputChange('annualLeave')}
                                    />
                                    <FormFeedback>{errors.annualLeave}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="overTime" md={5}>Số ngày đã làm thêm</Label>
                                <Col md={7}>
                                    <Input type="number" name="overTime"
                                        placeholder="Số ngày đã làm thêm"
                                        className="form-control"
                                        value={this.state.newStaff.overTime}
                                        valid={errors.overTime === ''}
                                        invalid={errors.overTime !== ''}
                                        onBlur={this.handleBlur('overTime')}
                                        onChange={this.handleInputChange('overTime')}
                                    />
                                    <FormFeedback>{errors.overTime}</FormFeedback>
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