import TableContainer from "components/Common/TableContainer";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input
} from "reactstrap";
import { listModalityRequest, addModalityRequest, deleteModalityRequest } from "store/modality/actions";
import { useSelector, useDispatch } from "react-redux";

function ModalityCategory() {
  const [modal6, setModal6] = useState(false);
  const [modalityData, setModalityData] = useState([]);
  const [modalityName, setModalityName] = useState("");
  const [modalityDescription, setModalityDescription] = useState("");

  const dispatch = useDispatch();
  const modalityDispatch = useSelector(state => state.ModalityReducer.modality);

  useEffect(() => {
    fetchData();
  }, [modalityDispatch]);

  useEffect(() => {
    setModalityData(modalityDispatch.exercise || []);
  }, [modalityDispatch]);

  const fetchData = async () => {
    await dispatch(listModalityRequest());
  };

  const handleDelete = modalityId => {
    dispatch(deleteModalityRequest(modalityId));
  };

const handleAdd = async () => {
  try {
    // Dispatch the add action
    await dispatch(
      addModalityRequest({
        name: modalityName,
        description: modalityDescription,
      })
    )

    // Refetch data to update the local state
    fetchData()

    // Close the modal and clear input fields
    setModal6(false)
    setModalityName("")
    setModalityDescription("")
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.log("Rate limited. Retrying after 5 seconds...")
      setTimeout(() => {
        handleAdd()
      }, 5000)
    } else {
      console.error("Error:", error)
    }
  }
}

  const ele = modalityData || [];

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: " Name",
        accessor: "name",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <div>
            <Button
              color="danger"
              onClick={() => handleDelete(row.original.id)}
            >
              Delete
            </Button>
          </div>
        ),
      },
    ],
    [handleDelete]
  );

  return (
    <div>
      <Card>
        <CardTitle className="d-flex">
          <Col sm={6}>Hypersports Conditions</Col>
          <Col sm={6} onClick={() => setModal6(!modal6)} className="text-end">
            <Button color="secondary">+ Add New</Button>
          </Col>
        </CardTitle>
        <CardText>
          <TableContainer
            columns={columns}
            data={ele}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={10}
            isPagination={true}
            tableClass="align-middle table-nowrap table-check table"
            theadClass="table-light"
            paginationDiv="col-12"
            pagination="justify-content-center pagination pagination-rounded"
          />
        </CardText>
      </Card>
      <Modal
        isOpen={modal6}
        autoFocus={true}
        centered={true}
        toggle={() => setModal6(!modal6)}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => setModal6(!modal6)}
          >
            Manage Shortcut
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Modality Name"
                  value={modalityName}
                  onChange={(e) => setModalityName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Description"
                  value={modalityDescription}
                  onChange={(e) => setModalityDescription(e.target.value)}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter className="">
            <Col className="text-center">
              <Button
                type="button"
                className="col-sm-12 btn-soft-secondary"
                color="secondary"
                onClick={() => setModal6(!modal6)}
              >
                Cancel
              </Button>
            </Col>
            <Col className="text-center">
              <Button
                className="col-sm-12 btn-soft-info"
                type="button"
                color="primary"
                onClick={handleAdd}
              >
                ADD
              </Button>
            </Col>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}

export default ModalityCategory;
