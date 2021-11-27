import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

class ModalForm extends Component  {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.resetModalForm();
    }

    render() {
        return(
            <Form model="modalForm" onSubmit={ (values) => this.handleSubmit(values) }>
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
        )
    }
}

export default ModalForm