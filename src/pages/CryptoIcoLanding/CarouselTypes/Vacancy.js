import React from 'react';
import { Row, Card, CardBody,CardHeader,CardTitle,CardText,Col } from 'reactstrap';
import { Link } from 'react-router-dom';


//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
// image

import airbnb from "assets/images/companies/airbnb.svg";
import mailchimp from "assets/images/companies/mailchimp.svg";
import reddit from "assets/images/companies/reddit.svg";
import amzon from "assets/images/companies/amazon.svg";
import adobPhotoshop from "assets/images/companies/adobe-photoshop.svg";
import line from "assets/images/companies/line.svg";


const VacancyList = [
    {
        id: 1,
        img: airbnb,
        title: "Post Job",
        country: "New Delhi",
        vacancy: 8
    },
    {
        id: 2,
        img: mailchimp,
        title: "Find job",
        country: "New Delhi",
        vacancy: 12
    },
    {
        id: 3,
        img: reddit,
        title: "Book Consultancy",
        country: "France",
        vacancy: 25
    },
    {
        id: 4,
        img: amzon,
        title: "Hire Professionals",
        country: "Gurugram",
        vacancy: 8
    },
    {
        id: 5,
        img: adobPhotoshop,
        title: "Community",
        country: " Louisiana",
        vacancy: 1
    },
    {
        id: 6,
        img: line,
        title: "Business Associate",
        country: " Phoenix",
        vacancy: 15
    },
];

const Vacancy = () => {
    return (
        <React.Fragment>
            <section className="section" style={{ backgroundColor: "#000", color: "white" }} >
                <div className="container-fluid">
                    <Row >
                        <Col lg="12 mb-3">
                            <div className="text-center mb-2">
                                <div className="small-title text-light">Notification</div>
                                <h4>Key Vacancy of the Details</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mx-4'>
                        {(VacancyList || []).map((item, key) => (
                            <Col lg={2} key={key}>
                                <Card>
                                    <CardBody className="p-4">
                                        <div className="text-center mb-3">
                                            <img src={item.img} alt="" className="avatar-sm" />
                                            <Link to="/job-details" className="text-body">
                                                <h5 className="mt-4 mb-2 font-size-15">{item.title}</h5>
                                            </Link>
                                            <p className="mb-0 text-muted">HySportx</p>
                                        </div>

                                        <div className="d-flex">
                                            <p className="mb-0 flex-grow-1 text-muted"><i className="bx bx-map text-body"></i> {item.country}</p>
                                            <p className="mb-0 text-muted"><b>{item.vacancy}</b> Total</p>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}

                    </Row>

                    <Row className='mx-4'>
                        <div className="hori-timeline">
                            <Swiper
                                slidesPerView={1}
                                // spaceBetween={10}
                                navigation
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    678: {
                                        slidesPerView: 2,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                    },
                                    1400: {
                                        slidesPerView: 4,
                                    }
                                }}
                                loop={true}
                                modules={[Pagination, Navigation]}
                                className="owl-carousel owl-theme  navs-carousel events"
                                id="timeline-carousel"
                            >
                                <SwiperSlide
                                    className="item event-list"
                                    style={{ display: "inline-table" }}
                                >
                                    <div>

                                        <div className="event-down-icon">
                                            <i className="bx bx-down-arrow-circle h1 text-info down-arrow-icon" />
                                        </div>

                                        <div className="mt-3 px-3">
                                            <Card outline color="success" className="border">
                                                <CardHeader className="bg-success">
                                                    <h5 className="my-0 text-light text-center">
                                                        <i className="mdi mdi-calculator me-3" />CALCULATE FITNESS & HEALTH
                                                    </h5>
                                                </CardHeader>
                                                <CardBody>
                                                    <CardTitle className="mt-0">Evaluate health and fitness</CardTitle>
                                                    <CardText>
                                                    Assess your overall fitness and health by integrating a comprehensive evaluation that considers factors .
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide
                                    className="item event-list"
                                    style={{ display: "inline-table" }}
                                >
                                    <div>

                                        <div className="event-down-icon">
                                            <i className="bx bx-down-arrow-circle h1 text-info down-arrow-icon" />
                                        </div>

                                        <div className="mt-3 px-3">
                                        <Card outline color="success" className="border">
                                                <CardHeader className="bg-success">
                                                    <h5 className="my-0 text-light text-center">
                                                        <i className="mdi mdi-bullseye-arrow me-3" />Exercise
                                                    </h5>
                                                </CardHeader>
                                                <CardBody>
                                                    <CardTitle className="mt-0">Physical exercise</CardTitle>
                                                    <CardText>
                                                    Engage in a consistent fitness routine, incorporating a variety of exercises such as cardio, strength training.
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </div>
                                </SwiperSlide>

                              

                                <SwiperSlide
                                    className="item event-list "
                                    style={{ display: "inline-table" }}
                                >
                                    <div>

                                        <div className="event-down-icon">
                                            <i className="bx bx-down-arrow-circle h1 text-info down-arrow-icon" />
                                        </div>

                                        <div className="mt-3 px-3">
                                        <Card outline color="success" className="border">
                                                <CardHeader className="bg-success">
                                                    <h5 className="my-0 text-light text-center">
                                                        <i className="mdi mdi-professional-hexagon me-3" />Professional
                                                    </h5>
                                                </CardHeader>
                                                <CardBody>
                                                    <CardTitle className="mt-0">Proficient</CardTitle>
                                                    <CardText>
                                                    Providing a foundation of expertise, this section features illustrative content that supplements the title.
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide
                                    className="item event-list"
                                    style={{ display: "inline-table" }}
                                >
                                    <div>
                                       
                                        <div className="event-down-icon">
                                            <i className="bx bx-down-arrow-circle h1 text-info down-arrow-icon" />
                                        </div>

                                        <div className="mt-3 px-3">
                                        <Card outline color="success" className="border">
                                                <CardHeader className="bg-success">
                                                    <h5 className="my-0 text-light text-center">
                                                        <i className="mdi mdi-record-player me-3" />Gym Manage
                                                    </h5>
                                                </CardHeader>
                                                <CardBody>
                                                    <CardTitle className="mt-0">Bodybuilding gym</CardTitle>
                                                    <CardText>
                                                    Push past limits in the gym, turning sweat into strength. Every rep counts on the path to your best self.
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </Row>


                </div>
            </section>
        </React.Fragment>
    )
}

export default Vacancy