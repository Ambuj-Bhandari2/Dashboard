/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const TeamComponent = () => {
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Team</h1>
                            <h6 className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto corporis quisquam consequatur reprehenderit ipsa nulla illo perspiciatis iste in est quis fugit, distinctio accusantium maxime rerum. Porro molestias eveniet labore.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer team2">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title">Experienced & Professional Team</h2>
                            <h6 className="subtitle">You can relay on our amazing team and also our customer services will be great experience for you without doubt and in no-time</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-30">
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="pro-pic t1">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Ambuj Bhandari</h5>
                                        <h6 className="subtitle">ABC</h6>
                                        <p></p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t2">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Hardik Arora</h5>
                                        <h6 className="subtitle">ACB</h6>
                                        <p>.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t3">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Abhishek Sindhwal</h5>
                                        <h6 className="subtitle">ABB</h6>
                                        <p></p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default TeamComponent;
