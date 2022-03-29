import React from "react"
import {connect} from 'react-redux'
import {fetchSingleStudent} from "../redux/singleStudent"
import {fetchSingleCampus} from "../redux/singleCampus"
import SingleCampus from "./SingleCampus"


class SingleStudent extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount () {
    this.props.loadSingleStudent(this.props.match.params.studentId)
    console.log("CampusId", this.props.SingleStudent.campusId)
    this.props.loadSingleStudent(this.props.SingleStudent.campusId)
  }

  render() {
    console.log("PROPS", this.props)
    const student = this.props.SingleStudent
    const campus = student.campus
    console.log("CAMPUS", campus)

   return (
    <div id="single-student" className="column">
      <div id="single-student-detail" className="row">
        <div className="column mr1">
          <h1>{student.firstName}</h1>
          <h1>{student.lastName}</h1>
          <h1>{student.email}</h1>
          <h1>{student.gpa}</h1>
          {/* <h1>{!campus.name ? "no campus" : campus.name}</h1> */}
        </div>
          <img src={student.imageUrl} />
      </div>
    </div>
   )}}

const mapStateToProps = (state) => {
  return {
    SingleStudent: state.singleStudent,
    SingleCampus: state.SingleCampus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    loadSingleStudent: (id) => dispatch(fetchSingleStudent(id)),
    loadSingleCampus: (id) => dispatch(fetchSingleCampus(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
