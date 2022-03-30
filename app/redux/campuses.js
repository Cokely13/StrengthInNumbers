import Axios from "axios";

const SET_CAMPUSES = 'SET_CAMPUSES'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const DELETE_CAMPUS = "DELETE_CAMPUS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";

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
    history.push("/");
  };
};

export const deleteCampus = (id, history) => {
  return async (dispatch) => {
    const { data: campus } = await Axios.delete(`/api/campuses/${id}`);
    dispatch(_deleteCampus(campus));
    history.push("/");
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
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
