import React, { useState, useEffect } from 'react'
import { Row, Col, Modal, Form, ModalHeader, ModalBody, ModalFooter, Label, Input, UncontrolledTooltip, FormFeedback, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { createSelector } from "reselect"
import Select from 'react-select';
import classnames from 'classnames';
import * as Yup from "yup";
import { useFormik } from "formik";
import { activityListRequest } from 'store/activity/actions'
import { addRoundRequest } from 'store/competition/actions'
import TableContainer from "components/Common/TableContainer"
const AddRoundFormModal = (props) => {
    const dispatch = useDispatch();
    const [roundModal, setRoundModal] = useState(null)
    const [activeTab, setActiveTab] = useState('tab1');

    const fetchActivityList = state => state.activityReducer
    const activityDataProperties = createSelector(
        fetchActivityList,
        activityReducer => ({
            activity: activityReducer.activity,
        })
    )
    const { activity } = useSelector(activityDataProperties)
    useEffect(() => { dispatch(activityListRequest()) }, [dispatch])

    const activityOptions = activity.activities && activity.activities.map(activity => ({
        label: activity.name,
        value: activity.id,
    }));
    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            competition_id: (props.data && props.data.id) || "",
            activitiy_id: "",
            round_name: "",
        },
        validationSchema: Yup.object({ round_name: Yup.string().required("Please Enter Round Name"), }),
        onSubmit: (values) => {
            dispatch(addRoundRequest(values));
            validation.resetForm();
        }
    });


    return (
        <React.Fragment>
            <Link to="#" className="btn btn-sm btn-outline-success" id={`roundtooltip`} onClick={() => { setRoundModal(true) }} >
                <i className="bx bx-square-rounded" />
                <UncontrolledTooltip placement="top" target={`roundtooltip`} > Round List</UncontrolledTooltip>
            </Link>


            <Modal isOpen={roundModal} id="activity" size="lg">
                <div className="modal-content">
                    <ModalHeader toggle={() => setRoundModal()} id="activitiesLabel" className="modal-header">{props.data.name} Round Manage</ModalHeader>
                    <ModalBody style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}>
                        <Nav tabs>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === 'tab1' })} onClick={() => toggleTab('tab1')} >Round List</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === 'tab2' })} onClick={() => toggleTab('tab2')}>Add Round</NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="tab1">

                                {/* <TableContainer
                                    columns={columns}
                                    data={Competition.competitions ? Competition.competitions : []}
                                    isGlobalFilter={true}
                                    isPagination={true}
                                    isShowingPageLength={true}
                                    customPageSize={3}
                                    tableClass=" align-middle nowrap mt-2"
                                    paginationDiv="col-sm-12 col-md-7"
                                    pagination="pagination justify-content-end pagination-rounded"
                                /> */}
                            </TabPane>
                            <TabPane tabId="tab2">
                                <Form className="form-horizontal mt-4" onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }} encType="multipart/form-data">
                                    <Row className='mx-auto'>
                                        <Input type="hidden" id="competition_id" name="competition_id" value={validation.values.competition_id} onChange={validation.handleChange} onBlur={validation.handleBlur} />
                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                                <Label htmlFor="name" className="mt-2">Select Activity</Label>
                                            </div>
                                            <div className="col-lg-9 col-md-9">
                                                <Select className="basic-single" classNamePrefix="select" name="activity_id" id="activity_id" placeholder="select condition"
                                                    options={activityOptions} onChange={(selectedOption) => { validation.setFieldValue("activity_id", selectedOption.value); }}
                                                    onBlur={validation.handleBlur}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                                <Label htmlFor="name" className="mt-2">Round Name</Label>
                                            </div>
                                            <div className="col-lg-9 col-md-9">
                                                <Input type="text" id="round_name" name="round_name" value={validation.values.round_name} onChange={validation.handleChange} onBlur={validation.handleBlur}
                                                    invalid={validation.touched.round_name && validation.errors.round_name ? true : false} />
                                                {validation.touched.round_name && validation.errors.round_name ? (<FormFeedback type="invalid">{validation.errors.round_name}</FormFeedback>) : null}
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="text-end">
                                        <button type='submit' className="btn btn-success me-5">Save Round <i className="bx bx-send align-middle"></i></button>
                                    </div>
                                </Form>
                            </TabPane>
                        </TabContent>
                    </ModalBody>
                    <ModalFooter>

                        <div className="text-end">
                            <button type='button' onClick={() => setRoundModal(false)} className="btn btn-dark me-1">close<i className="bx bx-send align-middle"></i></button>
                        </div>
                    </ModalFooter>
                </div>
            </Modal>
        </React.Fragment>
    )
}
export default AddRoundFormModal;