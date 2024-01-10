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
import { performanceListRequest } from "store/performance/actions"
import { equipmentListRequest } from "store/equipment/actions"
import { muscleListRequest } from "store/muscle/actions"
import { benefitListRequest } from "store/benifit/actions"
import { functionsIn } from "lodash"

// actions
import { addModalityRequest } from "../../store/modality/actions"
import { addMuscleRequest } from "../../store/muscle/actions"
import { addPerformanceRequest } from "../../store/performance/actions"
import { addExerciseRequest } from "../../store/exercises/actions"
import { addEquipmentRequest } from "../../store/equipment/actions"
import { addBenefitRequest } from "../../store/benifit/actions"



function HExercise() {
  
  
  const [modal, setmodal] = useState(false)
  const [modal1, setmodal1] = useState(false)
  const [modal2, setmodal2] = useState(false)
  const [modal3, setmodal3] = useState(false)
  const [modal4, setmodal4] = useState(false)
  const [modal5, setmodal5] = useState(false)

  const dispatch = useDispatch()

  const modalityDispatch = useSelector(state => state.ModalityReducer.modality)
  const performance = useSelector(state => state.performanceReducer.performance)
  const equipment = useSelector(state => state.equipmentReducer.equipment)
  const muscles = useSelector(state => state.muscleReducer.muscle)
  const benefit = useSelector(state => state.benefitReducer.benefit)


  const [modalityData, setModalityData] = useState()
  const [performanceData, setperformanceData] = useState()
  const [equipmentData, setequipmentData] = useState()
  const [muscleData, setmuscleData] = useState()
  const [benifitData, setbenifitData] = useState()

  useEffect(() => {
    dispatch(listModalityRequest())
    dispatch(performanceListRequest())
    dispatch(equipmentListRequest())
    dispatch(muscleListRequest())
    dispatch(benefitListRequest())
  }, [dispatch])

  useEffect(() => {
    if (modalityDispatch.exercise) {
      getModality()
    }
    if (performance.ptag) {
      getPerformance()
    }
    if (equipment.equipment) {
      getEquipment()
    }
    if (muscles.muscle) {
      getMuscles()
    }
    if (benefit.benifit) {
      getBenifit()
    }
  }, [modalityDispatch, performance, equipment, muscles, benefit])

  //fetch Benifit data

  function getBenifit() {
    try {
      const ele = benefit.benifit.map(function (item) {
        return {
          label: item.point,
          value: item.id,
        }
      })
      setbenifitData(ele)
    } catch (error) {
      console.log(error)
    }
  }
  const handleAddBenefits = () => {
    dispatch(
      addBenefitRequest({
        point: benefitsPoint,
        description: benefitsDescription,
      })
    )
    setBenefitsPoint("")
    setBenefitsDescription("")
  }

  //fetch muscles data
  function getMuscles() {
    try {
      const ele = muscles.muscle.map(function (item) {
        return {
          label: item.name,
          value: item.id,
        }
      })
      setmuscleData(ele)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddMuscle = () => {
    dispatch(
      addMuscleRequest({ name: muscleName, description: muscleDescription })
    )
    setMuscleName("")
    setMuscleDescription("")
  }

  //fetch modality data
  function getModality() {
    try {
      const ele = modalityDispatch.exercise.map(function (item) {
        return {
          label: item.name,
          value: item.id,
        }
      })
      setModalityData(ele)
    } catch (error) {
      console.log(error)
    }
  }

  const [modalityName, setModalityName] = useState("")
  const [modalityDescription, setModalityDescription] = useState("")

  const [performanceName, setPerformanceName] = useState("")
  const [performanceDescription, setPerformanceDescription] = useState("")

  const [equipmentName, setEquipmentName] = useState("")
  const [equipmentDescription, setEquipmentDescription] = useState("")

  const [muscleName, setMuscleName] = useState("")
  const [muscleDescription, setMuscleDescription] = useState("")

  const [benefitsPoint, setBenefitsPoint] = useState("")
  const [benefitsDescription, setBenefitsDescription] = useState("")

  const [exerciseName, setExerciseName] = useState("")
  const [descriptionName, setDescriptionName] = useState("")

  // fetch Equipment data
  function getEquipment() {
    try {
      const ele = equipment.equipment.map(function (item) {
        return {
          label: item.name,
          value: item.id,
        }
      })
      setequipmentData(ele)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddEquipment = () => {
    dispatch(
      addEquipmentRequest({
        name: equipmentName,
        description: equipmentDescription,
      })
    )
    setEquipmentName("")
    setEquipmentDescription("")
  }
  // fetch performance data
  function getPerformance() {
    try {
      const ele = performance.ptag.map(function (item) {
        return {
          label: item.name,
          value: item.id,
        }
      })
      setperformanceData(ele)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddPerformance = () => {
    dispatch(
      addPerformanceRequest({
        name: performanceName,
        description: performanceDescription,
      })
    )

    setPerformanceName("")
    setPerformanceDescription("")
  }

  const level = [
   {label:'Beginner',value:'beginner'},
   {label:'Intermediate',value:'intermediate'},
   {label:'Advanced',value:'advanced'},
  ]

  const submitModality = e => {
    const modalityData = {
      name: modalityName,
      description: modalityDescription,
    }

    console.log("Submitting modality data:", modalityData)
    dispatch(addModalityRequest(modalityData))
    setModalityName("")
    setModalityDescription("")
  }
  const [selectedModality, setselectedModality] = useState(null)
  const [selectedPtag, setselectedPtag] = useState(null)
  const [selectedEquipment, setselectedEquipment] = useState(null)
  const [selectedMuscleUsed, setselectedMuscleUsed] = useState(null)
  const [selectedBenefits, setselectedBenefits] = useState(null)
  const [selectedDifficultyLevel, setselectedDifficultyLevel] = useState(null)
  const set = s => s.map(e=>e.value)
  const handleSubmit = e => {
    e.preventDefault()
    const exerciseData = {
      name: exerciseName,
      description: descriptionName,
      level: selectedDifficultyLevel.value,
      modalities: set(selectedModality),
      ptags: set(selectedPtag),
      equipments: set(selectedEquipment),
      muscles: set(selectedMuscleUsed),
      benifits: set(selectedBenefits),
    }
    dispatch(addExerciseRequest(exerciseData))
    setExerciseName();
    setDescriptionName();
    setselectedDifficultyLevel();
    setselectedModality();
    setselectedPtag();
    setselectedEquipment();
    setselectedMuscleUsed();
    setselectedBenefits();
  }


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
                  className="form-control"
                  id="horizontal-firstname-Input"
                  placeholder="Enter Your"
                  value={exerciseName}
                  onChange={e => setExerciseName(e.target.value)}
                />
              </Row>
            </Col>
          </Row>
          <Row className="mb-4">
            <Label htmlFor="horizontal-email-Input" className="col-sm-4 col-form-label" >Modality : </Label>
            <Col sm={8}>
              <Row className="input-group">
                <Select
                  value={selectedModality}
                  isMulti={true}
                  onChange={(e) =>setselectedModality(e)}
                  options={modalityData}
                  className="select2-selection col-sm-10 p-0"
                />
                <button
                  onClick={() => {
                    setmodal(!modal)
                  }}
                  className="btn btn-primary col-lg-2 col-md-2 col-sm-2  m-0 px-1"
                  type="button"
                  id=""
                >
                  <i className="mdi mdi-plus" />
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
                  value={selectedPtag}
                  isMulti={true}
                  onChange={(e) =>setselectedPtag(e)}
                  options={performanceData}
                  className="select2-selection col-sm-10 p-0"
                />
                <button
                  onClick={() => {
                    setmodal1(!modal1)
                  }}
                  className="btn btn-primary col-lg-2 col-md-2 col-sm-2  m-0 px-1"
                  type="button"
                  id=""
                >
                  <i className="mdi mdi-plus" />
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
                  value={selectedDifficultyLevel}
                  onChange={(e) => setselectedDifficultyLevel(e)}
                  options={level}
                  className="select2-selection col-sm-10 p-0"
                />
                <button
                  onClick={() => {
                    setmodal2(!modal2)
                  }}
                  className="btn btn-primary col-lg-2 col-md-2 col-sm-2  m-0 px-1"
                  type="button"
                  id="inputGroupFileAddon03"
                >
                  <i className="mdi mdi-plus" />
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
                  value={selectedEquipment}
                  isMulti={true}
                  onChange={(e) =>setselectedEquipment(e)}
                  options={equipmentData}
                  className="select2-selection col-sm-10 p-0"
                />
                <button
                  onClick={() => {
                    setmodal3(!modal3)
                  }}
                  className="btn btn-primary col-lg-2 col-md-2 col-sm-2  m-0 px-1"
                  type="button"
                  id=""
                >
                  <i className="mdi mdi-plus" />
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
                  value={selectedMuscleUsed}
                  isMulti={true}
                  onChange={(e) =>setselectedMuscleUsed(e)}
                  options={muscleData}
                  className="select2-selection m-0 p-0 col-sm-10"
                />
                <button
                  onClick={() => {
                    setmodal4(!modal4)
                  }}
                  className="btn btn-primary col-lg-2 col-md-2 col-sm-2  m-0 px-1"
                  type="button"
                  id=""
                >
                  <i className="mdi mdi-plus" />
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
                  value={selectedBenefits}
                  isMulti={true}
                  onChange={(e) =>setselectedBenefits(e)}
                  options={benifitData}
                  className="select2-selection m-0 p-0 col-sm-10"
                />

                {/* </Col> */}
                {/* <Col className='m-0 p-0 ' sm={2}> */}
                <button
                  onClick={() => {
                    setmodal5(!modal5)
                  }}
                  className="btn btn-primary col-lg-2 col-md-2 col-sm-2  m-0 px-1"
                  type="button"
                  id=""
                >
                  <i className="mdi mdi-plus" />
                </button>
              </Row>
            </Col>
          </Row>

          <Row className="mb-4">
            <Label
              htmlFor="horizontal-password-Input"
              className="col-sm-4 col-form-label"
            >
              Exercise Description :
            </Label>
            <Col sm={8}>
              <Row className="col-sm-12">
                <textarea
                  rows={6}
                  type="password"
                  autoComplete="off"
                  className="form-control"
                  id="horizontal-password-Input"
                  value={descriptionName}
                  onChange={e => setDescriptionName(e.target.value)}
                />
              </Row>
            </Col>
          </Row>
        

          <Row className="justify-content-center pt-4">
            <Col sm={8}>
              <div>
                <Button
                  type="submit"
                  color="primary"
                  className="w-100"
                  onClick={handleSubmit}
                >
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
                  type="text"
                  className="form-control"
                  placeholder="Add Modality Name"
                  value={modalityName}
                  onChange={e => setModalityName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Add Modality Description"
                  value={modalityDescription}
                  onChange={e => setModalityDescription(e.target.value)}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            
            <Button
              type="button"
              color="success"
              onClick={() => {
                setmodal(!modal)
                submitModality()
              }}
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
            ADD Performance Tag
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Add Performance Name"
                  value={performanceName}
                  onChange={e => setPerformanceName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Add Performance Description"
                  value={performanceDescription}
                  onChange={e => setPerformanceDescription(e.target.value)}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
           
            <Button
              type="button"
              color="success"
              onClick={() => {
                setmodal1(!modal1)
                handleAddPerformance()
              }}
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
              color="success"
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
                  placeholder="Add Equipment Name"
                  value={equipmentName}
                  onChange={e => setEquipmentName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="email"
                  className="form-control"
                  placeholder="Add Equipment Description"
                  value={equipmentDescription}
                  onChange={e => setEquipmentDescription(e.target.value)}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
          
            <Button
              type="button"
              color="success"
              onClick={() => {
                setmodal3(!modal3)
                handleAddEquipment()
              }}
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
                  placeholder="Add Muscle Name"
                  value={muscleName}
                  onChange={e => setMuscleName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="email"
                  className="form-control"
                  placeholder="Add Muscle Description"
                  value={muscleDescription}
                  onChange={e => setMuscleDescription(e.target.value)}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
        
            <Button
              type="button"
              color="success"
              onClick={() => {
                setmodal4(!modal4)
                handleAddMuscle()
              }}
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
                  placeholder="Add Benefits Name"
                  value={benefitsPoint}
                  onChange={e => setBenefitsPoint(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="email"
                  className="form-control"
                  placeholder="Add Benefits Description"
                  value={benefitsDescription}
                  onChange={e => setBenefitsDescription(e.target.value)}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
       
            <Button
              type="button"
              color="success"
              onClick={() => {
                setmodal5(!modal5)
                handleAddBenefits()
              }}
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
