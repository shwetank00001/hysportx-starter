import TableContainer from 'components/Common/TableContainer'
import React from 'react'
import { useState } from 'react';
import { useMemo } from 'react';
import Select from 'react-select';
import { Button, Card, CardText, CardTitle, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function HActiviy() {
  const [modal6, setmodal6] = useState(false);
  const [selectedMulti, setselectedMulti] = useState(null);
  const modality = [
    {
      label: "Picnic",
      options: [
        { label: "Mustard", value: "Mustard" },
        { label: "Ketchup", value: "Ketchup" },
        { label: "Relish", value: "Relish" }
      ]
    },
    {
      label: "Camping",
      options: [
        { label: "Tent", value: "Tent" },
        { label: "Flashlight", value: "Flashlight" },
        { label: "Toilet Paper", value: "Toilet Paper" }
      ]
    }
  ];
  const scale = [
    { label: "Distance", value: "" },
    { label: "Time", value: "Ketchup" },
    { label: "Sets", value: "Relish" },
    { label: "Reps", value: "Reps" },
    { label: "Lift", value: "Lift" },


  ];
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Activity Name',
        accessor: 'activity ',
      },
      {
        Header: 'Condition',
        accessor: 'condition'
      },
      {
        Header: 'Performance',
        accessor: 'performance'
      },
      {
        Header: 'Description',
        accessor: 'description'
      },
      {
        Header: 'Action',
        accessor: 'action'
      },
    ],
    []
  );


  const data = [
    {
      id: '1',
      name: "Jennifer Chang",
      code: "Regional Director",
      link: 28,
      Description: "Singapore hfhfhfhhfhfh",
      action: <p className='text-success font-size-20'> +</p>
    },
    {
      id: '2',
      name: "Jennifer Chang",
      code: "Regional Director",
      link: 28,
      Description: "Singapore hfhfhfhhfhfh",
      action: "2010/11/14"
    },
    {
      id: '3',
      name: "Jennifer Chang",
      code: "Regional Director",
      link: 28,
      Description: "Singapore hfhfhfhhfhfh",
      action: "2010/11/14"
    },
  ];



  return (
    <div>
      <Card>
        <CardTitle className="d-flex">
          <Col sm={6}>Hypersports Activities</Col>
          <Col
            sm={6}
            onClick={() => setmodal6(!modal6)}
            className="text-end"
          >
            <Button color="primary"><i className='bx bx-plus' /> Add New</Button>
          </Col>
        </CardTitle>
        <CardText>
          <TableContainer
            columns={columns}
            data={data}
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

      
      <Card className='d-flex'>

      </Card>
      <Modal
        className=''

        isOpen={modal6}
        autoFocus={true}
        centered={true}
        toggle={() => {
          setmodal6(!modal6)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal6(!modal6)
            }}
          >
            Manage Shortcut
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Activity Name"
                />
              </div>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Conditions"
                />
              </div>
              <div className="mb-3 input-group">
                <Select
                  value={selectedMulti}
                  isMulti={true}
                  onChange={() => {
                    handleMulti()
                  }}
                  options={scale}
                  className="select2-selection col-sm-5 p-0"
                />
                <Input
                  type="email"
                  className="form-control"
                  placeholder=""
                />
                <Select
                  value={selectedMulti}
                  isMulti={true}
                  onChange={() => {
                    handleMulti()
                  }}
                  options={modality}
                  className="select2-selection col-sm-3 p-0"
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
                onClick={() => {
                  setmodal6(!modal6)
                }}
              >
                Cancel
              </Button>
            </Col>
            <Col className="text-center">
              <Button
                className="col-sm-12 btn-soft-info"
                type="button"
                color="primary"
                onClick={() => setmodal6(!modal6)}
              >
                ADD
              </Button>
            </Col>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  )
}

export default HActiviy