import React from "react"
import {
  CardBody,
  Col,
  Form,
  Label,
  Row,
  Button,
  Input,
  ModalHeader,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap"
import classNames from "classnames"
import Select from "react-select"
import { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"

// modality
import { listModalityRequest } from "store/modality/actions"

function HExercise() {
  const [selectedMulti, setselectedMulti] = useState(null)
  const [modal, setmodal] = useState(false)
  const [modal1, setmodal1] = useState(false)
  const [modal2, setmodal2] = useState(false)
  const [modal3, setmodal3] = useState(false)
  const [modal4, setmodal4] = useState(false)
  const [modal5, setmodal5] = useState(false)



  const dispatch = useDispatch()



  const modalityDispatch = useSelector(state => state.ModalityReducer.modality)
  const [modalityData, setModalityData] = useState(modalityDispatch.exercise)

    const modalityTest = [
      {
        label: modalityDispatch.exercise[0].name,
        value: modalityDispatch.exercise[0].name,
      },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ]

  useEffect( ()=> {
        dispatch(listModalityRequest())
  }, [dispatch])

  console.log(modalityDispatch)

  const ele = modalityDispatch.exercise.map(function(item){
    return {
      label : item.name,
      value : item.id
    }
  })

  console.log(modalityDispatch.exercise)

  

  const performncetag = [
    {
      label: "Picnic",
      options: [
        { label: "Lift", value: "Lift" },
        { label: "Time", value: "Time" },
        { label: "Distance", value: "Distance" },
      ],
    },
    // {
    //   label: "Camping",
    //   options: [
    //     { label: "Tent", value: "Tent" },
    //     { label: "Flashlight", value: "Flashlight" },
    //     { label: "Toilet Paper", value: "Toilet Paper" }
    //   ]
    // }
  ]

  const level = [
    {
      label: "Easy Level",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
      ],
    },
    {
      label: "Normal Level",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
      ],
    },
    {
      label: "Difficulty Level",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
      ],
    },
  ]

  const equipment = [
    {
      label: "Picnic",
      options: [
        { label: "Barbell", value: "Barbell" },
        { label: "Weight palate", value: "Weight palate" },
        { label: "BODY WEIGHT", value: "BODY WEIGHT" },
      ],
    },
  ]

  return (
    <div>
      <CardBody>
        {/* <CardTitle className="mb-4">Horizontal form Layout</CardTitle> */}
        <Form>
          <Row className="mb-4">
            <Label
              htmlFor="horizontal-firstname-Input"
              className="col-sm-4 col-form-label"
            >
              HSX Exercise Name :
            </Label>
            <Col sm={8}>
              <Row className="col-sm-12">
                <Input
                  type="text"
                  className="form-control px-0 "
                  id="horizontal-firstname-Input"
                  placeholder="Enter Your"
                />
              </Row>
            </Col>
          </Row>
          <Row className="mb-4">
            <Label
              htmlFor="horizontal-email-Input"
              className="col-sm-4 col-form-label"
            >
              Modality :
            </Label>

            {/* MODALITY */}

            <Col sm={8}>
              <Row className="input-group">
                <Select
                  value={selectedMulti}
                  isMulti={true}
                  onChange={() => {
                    handleMulti()
                  }}
                  options={ele}
                  className="select2-selection col-sm-10 p-0"
                />
                <button
                  onClick={() => {
                    setmodal(!modal)
                  }}
                  className="btn btn-primary col-sm-2  m-0 px-1 font-size-12"
                  type="button"
                  id="inputGroupFileAddon03"
                >
                  + ADD
                </button>
              </Row>
            </Col>
          </Row>
          <Row className="mb-4">
            <Label
              htmlFor="horizontal-password-Input"
              className="col-sm-4 col-form-label"
            >
              Performance Tag :
            </Label>
            <Col sm={8}>
              <Row className="input-group">
                <Select
                  value={selectedMulti}
                  isMulti={true}
                  onChange={() => {
                    handleMulti()
                  }}
                  options={performncetag}
                  className="select2-selection col-sm-10 p-0"
                />
                <button
                  className="btn btn-primary col-sm-2  m-0 px-1 font-size-12"
                  onClick={() => {
                    setmodal1(!modal1)
                  }}
                  type="button"
                  id="inputGroupFileAddon03"
                >
                  + ADD
                </button>
              </Row>
            </Col>
          </Row>
          <Row className="mb-4">
            <Label
              htmlFor="horizontal-password-Input"
              className="col-sm-4 col-form-label"
            >
              Difficulty Level :
            </Label>
            <Col sm={8}>
              <Row className="input-group">
                <Select
                  value={selectedMulti}
                  isMulti={true}
                  onChange={() => {
                    handleMulti()
                  }}
                  options={level}
                  className="select2-selection col-sm-10 p-0"
                />
                <button
                  onClick={() => {
                    setmodal2(!modal2)
                  }}
                  className="btn btn-primary col-sm-2  m-0 px-1 font-size-12"
                  type="button"
                  id="inputGroupFileAddon03"
                >
                  + ADD
                </button>
              </Row>
            </Col>
          </Row>
          <Row className="mb-4">
            <Label
              htmlFor="horizontal-password-Input"
              className="col-sm-4 col-form-label"
            >
              Equipment :
            </Label>
            <Col sm={8}>
              <Row className="input-group">
                <Select
                  value={selectedMulti}
                  isMulti={true}
                  onChange={() => {
                    handleMulti()
                  }}
                  options={equipment}
                  className="select2-selection col-sm-10 p-0"
                />
                <button
                  onClick={() => {
                    setmodal3(!modal3)
                  }}
                  className="btn btn-primary col-sm-2  m-0 px-1 font-size-12"
                  type="button"
                  id="inputGroupFileAddon03"
                >
                  + ADD
                </button>
              </Row>
            </Col>
          </Row>
          <Row className="mb-4">
            <Label
              htmlFor="horizontal-password-Input"
              className="col-sm-4 col-form-label"
            >
              Muscle Used :
            </Label>
            <Col sm={8}>
              <Row className="input-group">
                <Select
                  value={selectedMulti}
                  isMulti={true}
                  onChange={() => {
                    handleMulti()
                  }}
                  options={modalityData}
                  className="select2-selection m-0 p-0 col-sm-10"
                />
                <button
                  onClick={() => {
                    setmodal4(!modal4)
                  }}
                  className="btn btn-primary col-sm-2  m-0 px-1 font-size-12"
                  type="button"
                  id="inputGroupFileAddon03"
                >
                  + ADD
                </button>
              </Row>
            </Col>
          </Row>
          <Row className="mb-4">
            <Label
              htmlFor="horizontal-password-Input"
              className="col-sm-4 col-form-label"
            >
              Benefits :
            </Label>
            <Col className="" sm={8}>
              <Row className="input-group">
                {/* <Col className='m-0 p-0' sm={10}> */}
                <Select
                  value={selectedMulti}
                  isMulti={true}
                  onChange={() => {
                    handleMulti()
                  }}
                  options={modalityData}
                  className="select2-selection m-0 p-0 col-sm-10"
                />

                {/* </Col> */}
                {/* <Col className='m-0 p-0 ' sm={2}> */}
                <button
                  onClick={() => {
                    setmodal5(!modal5)
                  }}
                  className="btn btn-primary col-sm-2  m-0 px-1 font-size-12"
                  type="button"
                  id="inputGroupFileAddon03"
                >
                  + ADD
                </button>
                {/* </Col> */}
              </Row>
            </Col>
          </Row>

          <Row className="mb-4">
            <Label
              htmlFor="horizontal-password-Input"
              className="col-sm-4 col-form-label"
            >
              Exercise Descripon :
            </Label>
            <Col sm={8}>
              <Row className="col-sm-12">
                <textarea
                  rows={6}
                  type="password"
                  autoComplete="off"
                  className="form-control"
                  id="horizontal-password-Input"
                />
              </Row>
            </Col>
          </Row>
          <Row className="mb-4">
            <Label
              htmlFor="horizontal-password-Input"
              className="col-sm-4 col-form-label"
            >
              Image Upload/Link :
            </Label>
            <Col sm={8}>
              <Row className="col-sm-12">
                <Select
                  value={selectedMulti}
                  isMulti={true}
                  onChange={() => {
                    handleMulti()
                  }}
                  options={modalityData}
                  className="select2-selection p-0"
                />

                <Row className="my-2 p-0">
                  <Col>
                    <Row className="text-center">
                      <Col className="font-size-12 m-0 p-0">
                        <h6>Upload Image </h6>
                      </Col>
                      <Col className="font-size-10">
                        <Button className="font-size-10 m-0 p-0">
                          + ADD MORE
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="text-center">
                      <Col>
                        <Button className="btn-soft-primary font-size-11 m-0 p-0">
                          <div>+</div>
                          <span>ADD MORE</span>
                        </Button>
                      </Col>
                      <Col className="font-size-10">Upload Image </Col>
                    </Row>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
          <Row className="mb-4">
            <Label
              htmlFor="horizontal-password-Input"
              className="col-sm-4 col-form-label"
            >
              Video Link :
            </Label>
            <Col sm={8}>
              <Row className="col-sm-12">
                <Input
                  type="password"
                  autoComplete="off"
                  className="form-control px-0"
                  id="horizontal-password-Input"
                />
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-start">
            <Col sm={8}>
              <div>
                <Button type="submit" color="primary" className="w-md">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>
      <Modal
        isOpen={modal}
        autoFocus={true}
        centered={true}
        toggle={() => {
          setmodal(!modal)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal(!modal)
            }}
          >
            ADD Modality
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="New Modality"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal(!modal)
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => setmodal(!modal)}
            >
              ADD
            </Button>
          </ModalFooter>
        </div>
      </Modal>
      <Modal
        isOpen={modal1}
        autoFocus={true}
        centered={true}
        toggle={() => {
          setmodal1(!modal1)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal1(!modal1)
            }}
          >
            ADD Proformance Tag
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="New Modality"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal1(!modal1)
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => setmodal1(!modal1)}
            >
              ADD
            </Button>
          </ModalFooter>
        </div>
      </Modal>
      <Modal
        isOpen={modal2}
        autoFocus={true}
        centered={true}
        toggle={() => {
          setmodal2(!modal2)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal2(!modal2)
            }}
          >
            ADD Difficulty Level
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="New Modality"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal2(!modal2)
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => setmodal2(!modal2)}
            >
              ADD
            </Button>
          </ModalFooter>
        </div>
      </Modal>
      <Modal
        isOpen={modal3}
        autoFocus={true}
        centered={true}
        toggle={() => {
          setmodal3(!modal3)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal3(!modal3)
            }}
          >
            ADD New Equipment
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="New Modality"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal3(!modal3)
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => setmodal3(!modal3)}
            >
              ADD
            </Button>
          </ModalFooter>
        </div>
      </Modal>
      <Modal
        isOpen={modal4}
        autoFocus={true}
        centered={true}
        toggle={() => {
          setmodal4(!modal4)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal4(!modal4)
            }}
          >
            New Muscle Used
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="New Modality"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal4(!modal4)
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => setmodal4(!modal4)}
            >
              ADD
            </Button>
          </ModalFooter>
        </div>
      </Modal>
      <Modal
        isOpen={modal5}
        autoFocus={true}
        centered={true}
        toggle={() => {
          setmodal5(!modal5)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal5(!modal5)
            }}
          >
            ADD Benifits
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="New Modality"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal5(!modal5)
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => setmodal5(!modal5)}
            >
              ADD
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  )
}

export default HExercise
