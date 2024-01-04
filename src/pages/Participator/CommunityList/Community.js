import React, { useState, useMemo, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { createSelector } from "reselect"
import { format } from 'date-fns';
import {
  Col,
  Input,
  Row,
  Label,
  Modal,
  Form,
  Badge,
  Card,
  CardBody,
  Button,
  UncontrolledTooltip,
  Container,
} from "reactstrap"
import TableContainer from "components/Common/TableContainer"
//import components
import Breadcrumbs from 'components/Common/Breadcrumb';
import DeleteModal from 'components/Common/DeleteModal';
import { fetchParticipatorCommunities as participatedCommunities, onRemovePartipator as removeParticipatorRequestList } from '../../../store/actions'

const Community = () => {

  const dispatch = useDispatch()
  const fetchParticipatorReqList = state => state.participatorReducer;
  const ParticipatorReqDataProperties = createSelector(
    fetchParticipatorReqList,
    participatorCommunityRequest => ({
      RequestList: participatorCommunityRequest.participator,
      loading: participatorCommunityRequest.loading,
    })
  )

  const { RequestList, loading } = useSelector(ParticipatorReqDataProperties)

  useEffect(() => {
    dispatch(participatedCommunities());
  }, [dispatch]);


  const [open, setOpen] = useState(false)

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

  //coloums header start
  const columns = useMemo(
    () => [
      {
        Header: "Sr No",
        accessor: "id",
        Cell: cellProps => {
          return (
            <>
              <p className="">{cellProps.row.index + 1}</p>
            </>
          )
        },
      },
      {
        Header: "Commumity Name",
        accessor: "name",
        Cell: (cellProps) => (
          <>
            <p className="">{cellProps.row.original.first_name} {" "}{cellProps.row.original.last_name}</p>
          </>
        ),
      },

      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Contact No",
        accessor: "phone",
      },
      {
        Header: 'Requested Date',
        accessor: 'role',
        Cell: (cellProps) => (cellProps.row.original.pivot) ? format(new Date(cellProps.row.original.pivot.created_at), 'dd MMM, yyyy') : ""
      },
      {
        Header: 'Accepted Date',
        accessor: 'updated_at',
        Cell: (cellProps) => {
          if(cellProps.row.original.pivot){
          switch (cellProps.row.original.pivot.status) {
            case "confirm":
              return (cellProps.row.original.pivot.updated_at) ? format(new Date(cellProps.row.original.pivot.updated_at), 'dd MMM, yyyy') : ""
            case "requested":
              return <Badge className="bg-danger px-2 py-2">{cellProps.row.original.pivot.status}</Badge>
            default:
              return <Badge className="bg-warning px-2 py-2">{cellProps.row.original.pivot.status}</Badge>
          }
        }
        return "--";
        },
        // Cell: (cellProps) => (cellProps.row.original.pivot.updated_at) ? format(new Date(cellProps.row.original.pivot.updated_at), 'dd MMM, yyyy') : ""
      },


      {
        Header: "Action",
        accessor: "action",
        disableFilters: true,
        Cell: cellProps => {
          return (
            <ul className="list-unstyled hstack gap-1 mb-0">
              <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                <Button
                  className="btn btn-sm btn-soft-primary"
                  id={`viewtooltip-${cellProps.row.original.id}`} //use param Hook
                >
                  <i className="mdi mdi-eye-outline" />
                </Button>
              </li>
              <UncontrolledTooltip
                placement="top"
                target={`viewtooltip-${cellProps.row.original.id}`}
              >
                View
              </UncontrolledTooltip>
              {/* 
              <li>
                <Button
                  className="btn btn-sm btn-soft-success"
                  id={`edittooltip-${cellProps.row.original.id}`}
                  // onClick={() => {
                  //       const acceptData = cellProps.row.original;
                  //       onClickAccept(acceptData);
                  //   }}
                >

                  <i className="bx bx bx-check-shield" />
                  <UncontrolledTooltip
                    placement="top"
                    target={`edittooltip-${cellProps.row.original.id}`}
                  >
                    Accept Request
                  </UncontrolledTooltip>
                </Button>
              </li> */}

              <li>
                <Link
                  to="#"
                  className="btn btn-sm btn-soft-danger"
                  onClick={() => {
                        const removeData = cellProps.row.original;
                        onClickRemove(removeData);
                    }}
                  id={`deletetooltip-${cellProps.row.original.id}`}
                >
                  <i className="mdi mdi-table-row-remove" />
                  <UncontrolledTooltip
                    placement="top"
                    target={`deletetooltip-${cellProps.row.original.id}`}
                  >
                    Remove Request
                  </UncontrolledTooltip>
                </Link>
              </li>
            </ul>
          )
        },
      },
    ],

    []
  )

    //delete exercise list start
    const [removeModal, setRemoveModal] = useState(false);
    const [removeData, setRemove] = useState(null);
    const onClickRemove = (removeData) => {
      setRemove(removeData);
      setRemoveModal(true);
    };
    const handleAcceptParcipator = () => {
        if (removeData && removeData.id) {
            dispatch(removeParticipatorRequestList(removeData.id));
            setRemoveModal(false);
        }
    };
    //delete excise list end


  return (
    <React.Fragment>
       <DeleteModal
                show={removeModal}
                onDeleteClick={handleAcceptParcipator}
                onCloseClick={() => setRemoveModal(false)}
                text="Are you sure You want to Remove Request list"
                
            />
      <Container fluid>
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="fwgames" breadcrumbItem="hyposports" />

        <Card>

          <Col xl={12}>
            <Card>
              <CardBody className="border-bottom">
                <div className="d-flex align-items-center">
                  <h5 className="mb-0 card-title flex-grow-1">Community Lists</h5>
                  <div className="flex-shrink-0">
                    <Link to="#!" className="btn btn-light me-1"><i className="mdi mdi-refresh"></i></Link>
                    <button className="btn btn-primary" onClick={() => { setOpen(!open), removeBodyCss() }}> <i className="mdi mdi-plus me-1" />Create Participator</button>

                  </div>
                </div>
              </CardBody>
              <CardBody>
                <TableContainer
                  columns={columns}
                  data={RequestList.communities ? RequestList.communities : [{}]}
                  // data={RequestList}
                  isGlobalFilter={true}
                  customPageSizeOptions={3}
                  isPagination={true}
                  iscustomPageSizeOptions={true}
                  isShowingPageLength={true}
                  customPageSize={5}
                  tableClass="table-bordered align-middle nowrap mt-2"
                  paginationDiv="col-sm-12 col-md-7"
                  pagination="pagination justify-content-end pagination-rounded"
                />
              </CardBody>
            </Card>

          </Col>
        </Card>
      </Container>
    
    </React.Fragment>
  )
}

export default Community
