// import React, { useState, useEffect, useMemo } from "react"
// import { Link } from "react-router-dom"
// import * as Yup from "yup"
// import { useFormik } from "formik"
// import { useSelector, useDispatch } from "react-redux"
// import { createSelector } from "reselect"
// import {
//   Row,
//   Col,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   UncontrolledTooltip,
//   Modal,
//   ModalBody,
//   ModalHeader,
//   ModalFooter,
//   Form,
//   Label,
//   Input,
//   FormFeedback,
// } from "reactstrap"
// import TableContainer from "components/Common/TableContainer"
// import DeleteModal from "components/Common/DeleteModal"

// import {
//   addRoundRequest,
//   removeRoundActivityRequest,
//   removeRoundRequest,
// } from "../../../store/competition/actions" 

// const index = () => {
//   const dispatch = useDispatch()
//   const [roundModal, setRoundModal] = useState(false)
//   const [viewRoundData, setRoundViewData] = useState(null)
//   const [editRoundData, setRoundEditData] = useState(null)
//   const [modalReadOnly, setModalReadOnly] = useState(false)
//   const fetchRoundList = state => state.roundReducer // Update the selector path
//   let modalTitle = "Create Round"
//   if (viewRoundData !== null) {
//     modalTitle = "View Round"
//   }
//   if (editRoundData !== null) {
//     modalTitle = "Update Round"
//   }

//   const roundDataProperties = createSelector(fetchRoundList, roundReducer => ({
//     Round: roundReducer.round,
//     error: roundReducer.error,
//     errors: roundReducer.adderrors,
//   }))

//   const { Round, error, errors } = useSelector(roundDataProperties)

//   useEffect(() => {
//     dispatch(conditionListRequest())
//   }, [dispatch])

//   const validation = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       code:
//         (viewRoundData && viewRoundData.code) ||
//         (editRoundData && editRoundData.code) ||
//         "",
//       name:
//         (viewRoundData && viewRoundData.name) ||
//         (editRoundData && editRoundData.name) ||
//         "",
//       description:
//         (viewRoundData && viewRoundData.description) ||
//         (editRoundData && editRoundData.description) ||
//         "",
//     },
//     validationSchema: Yup.object({
//       code: Yup.string().required("Please Enter Round Code"),
//     }),
//     onSubmit: values => {
//       if (editRoundData !== null) {
//         dispatch(updateRound(values))
//         setRoundModal()
//         validation.resetForm()
//       } else {
//         dispatch(addRoundRequest(values))
//         setRoundModal()
//         validation.resetForm()
//       }
//     },
//   })

//   useEffect(() => {
//     if (errors === null) {
//       setRoundModal()
//       validation.resetForm()
//     }
//   }, [errors])

//   const columns = useMemo(
//     () => [
//       {
//         Header: "No",
//         accessor: "id",
//         Cell: cellProps => {
//           return (
//             <p className="">{cellProps.rows.length - cellProps.row.index}</p>
//           )
//         },
//       },
//       {
//         Header: "Round Code",
//         accessor: "code",
//       },
//       {
//         Header: "Name",
//         accessor: "name",
//       },
//       {
//         Header: "Description",
//         accessor: "description",
//       },
//       {
//         Header: "Action",
//         accessor: "action",
//         disableFilters: true,
//         Cell: cellProps => {
//           return (
//             <ul className="list-unstyled hstack gap-1 mb-0">
//               <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
//                 <Button
//                   className="btn btn-sm btn-soft-primary"
//                   id={`viewtooltip-${
//                     cellProps.row.original ? cellProps.row.original.id : ""
//                   }`}
//                   onClick={() => {
//                     const singleRoundData = cellProps.row.original
//                     setRoundViewData(singleRoundData)
//                     setRoundModal(true)
//                     setModalReadOnly(true)
//                   }}
//                 >
//                   <i className="mdi mdi-eye-outline" />
//                 </Button>
//               </li>
//               <UncontrolledTooltip
//                 placement="top"
//                 target={`viewtooltip-${
//                   cellProps.row.original ? cellProps.row.original.id : ""
//                 }`}
//               >
//                 View
//               </UncontrolledTooltip>
//               <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
//                 <Button
//                   className="btn btn-sm btn-soft-info"
//                   id={`edittooltip-${
//                     cellProps.row.original ? cellProps.row.original.id : ""
//                   }`}
//                   onClick={() => {
//                     const singleRoundData = cellProps.row.original
//                     setRoundEditData(singleRoundData)
//                     setRoundModal(true)
//                     setModalReadOnly(false)
//                   }}
//                 >
//                   <i className="bx bx-pencil" />
//                 </Button>
//               </li>
//               <UncontrolledTooltip
//                 placement="top"
//                 target={`edittooltip-${
//                   cellProps.row.original ? cellProps.row.original.id : ""
//                 }`}
//               >
//                 Update Round
//               </UncontrolledTooltip>
//               <li>
//                 <Link
//                   to="#"
//                   onClick={() => {
//                     const round_code = cellProps.row.original
//                     onClickDelete(round_code)
//                   }}
//                   className="btn btn-sm btn-soft-danger"
//                   id={`deletetooltip-${
//                     cellProps.row.original ? cellProps.row.original.id : ""
//                   }`}
//                 >
//                   <i className="mdi mdi-delete-outline" />
//                   <UncontrolledTooltip
//                     placement="top"
//                     target={`deletetooltip-${
//                       cellProps.row.original ? cellProps.row.original.id : ""
//                     }`}
//                   >
//                     Delete
//                   </UncontrolledTooltip>
//                 </Link>
//               </li>
//             </ul>
//           )
//         },
//       },
//     ],
//     []
//   )

//   const [deleteModal, setDeleteModal] = useState(false)
//   const [round, setRound] = useState(null)

//   const onClickDelete = data => {
//     setRound(data)
//     setDeleteModal(true)
//   }

//   const handleDeleteRound = () => {
//     setDeleteModal(false)
//     dispatch(removeRoundRequest(round.code))
//   }

//   return (
//     <React.Fragment>
//       <DeleteModal
//         text={"Are you Sure you want to Delete the Round list ?"}
//         show={deleteModal}
//         onDeleteClick={handleDeleteRound}
//         onCloseClick={() => setDeleteModal(false)}
//       />
//       <div className="d-flex align-items-center border-bottom pb-3">
//         <h5 className="mb-0 card-title flex-grow-1">Round Lists</h5>
//         <div className="flex-shrink-0">
//           <Link
//             to="#!"
//             onClick={() => dispatch(conditionListRequest())}
//             className="btn btn-light me-1"
//           >
//             <i className="mdi mdi-refresh"></i>
//           </Link>
//           <Link
//             to="#"
//             onClick={() => setRoundModal(true)}
//             className="btn btn-primary"
//           >
//             <i className="mdi mdi-plus me-1"></i>Create Round
//           </Link>
//         </div>
//       </div>
//       <CardBody>
//         <TableContainer
//           columns={columns}
//           data={Round.rounds ? Round.rounds : []}
//           isGlobalFilter={true}
//           isPagination={true}
//           isShowingPageLength={true}
//           customPageSize={5}
//           tableClass=" align-middle nowrap mt-2"
//           paginationDiv="col-sm-12 col-md-7"
//           pagination="pagination justify-content-end pagination-rounded"
//         />
//       </CardBody>

//       <Modal
//         isOpen={roundModal}
//         toggle={() => {
//           setRoundViewData(null)
//           setRoundEditData(null)
//           setRoundModal()
//         }}
//         id="round"
//       >
//         <div className="modal-content">
//           <ModalHeader
//             toggle={() => {
//               setRoundModal()
//               setRoundViewData(null)
//               setRoundEditData(null)
//             }}
//             id="RoundLabel"
//             className="modal-header"
//           >
//             {modalTitle}
//           </ModalHeader>
//           <ModalBody>
//             <Form
//               className="form-horizontal"
//               onSubmit={e => {
//                 e.preventDefault()
//                 validation.handleSubmit()
//                 return false
//               }}
//             >
//               <Row>
//                 <div className="row mb-3">
//                   <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
//                     <Label htmlFor="code" className="mt-2">
//                       Round Code
//                     </Label>
//                   </div>
//                   <div className="col-lg-8 col-md-8">
//                     <Input
//                       type="text"
//                       id="code"
//                       name="code"
//                       placeholder=""
//                       onChange={validation.handleChange}
//                       onBlur={validation.handleBlur}
//                       value={validation.values.code || ""}
//                       invalid={
//                         validation.touched.code && validation.errors.code
//                           ? true
//                           : false
//                       }
//                       readOnly={editRoundData !== null ? true : modalReadOnly}
//                     />
//                     {validation.touched.code && validation.errors.code ? (
//                       <FormFeedback type="invalid">
//                         {validation.errors.code}
//                       </FormFeedback>
//                     ) : null}
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
//                     <Label htmlFor="name" className="mt-2">
//                       Name
//                     </Label>
//                   </div>
//                   <div className="col-lg-8 col-md-8">
//                     <Input
//                       type="text"
//                       id="name"
//                       name="name"
//                       placeholder=""
//                       onChange={validation.handleChange}
//                       onBlur={validation.handleBlur}
//                       value={validation.values.name || ""}
//                       readOnly={modalReadOnly}
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
//                     <Label htmlFor="description" className="mt-2">
//                       Description
//                     </Label>
//                   </div>
//                   <div className="col-lg-8 col-md-8">
//                     <div className="form-floating">
//                       <textarea
//                         className="form-control"
//                         name="description"
//                         id="description"
//                         onChange={validation.handleChange}
//                         onBlur={validation.handleBlur}
//                         value={validation.values.description || ""}
//                         readOnly={modalReadOnly}
//                       ></textarea>
//                       <Label htmlFor="description">Round Description</Label>
//                     </div>
//                   </div>
//                 </div>
//                 <Col lg={12} className={modalReadOnly ? "d-none" : "d-block"}>
//                   <div className="text-end">
//                     <button className="btn btn-success me-1">
//                       {editRoundData ? "Update Round" : "Save Round"}{" "}
//                       <i className="bx bx-send align-middle"></i>
//                     </button>
//                   </div>
//                 </Col>
//               </Row>
//             </Form>
//           </ModalBody>
//         </div>
//       </Modal>
//     </React.Fragment>
//   )
// }

// export default index

import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index
