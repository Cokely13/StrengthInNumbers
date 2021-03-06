import Axios from "axios";

const SET_CAMPUSES = 'SET_CAMPUSES'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const DELETE_CAMPUS = "DELETE_CAMPUS";

export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses
  }
};

const _createCampus = (campus) => {
  return {
    type: CREATE_CAMPUS,
    campus,
  };
};


const _deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus,
  };
};

export const fetchCampuses = () => {
  return async (dispatch) => {
    try {
      const response = await Axios.get('/api/campuses');
      const data = response.data;
      dispatch(setCampuses(data))
    } catch (err) {
      console.log(err)
    }
  }
};

export const createCampus = (campus, history) => {
  return async (dispatch) => {
    const { data: created } = await Axios.post("/api/campuses", campus);
    dispatch(_createCampus(created));
    history.push("/campuses");
  };
};


export const deleteCampus = (id, history) => {
  return async (dispatch) => {
    const { data: campus } = await Axios.delete(`/api/campuses/${id}`);
    dispatch(_deleteCampus(campus));
    history.push("/campuses");
  };
};


const initialState = []
export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses
      case CREATE_CAMPUS:
        return [...state, action.campus];
        case DELETE_CAMPUS:
          return state.filter((campus) => campus.id !== action.campus.id);
    default:
      return state
}}
