import { generalTypes } from "../../components/types/genral.types";

const location = (state = [], action) => {
  switch (action.type) {
    case generalTypes.CONVERTED_XLSX:
      return {
        ...state,
        locations: action.jsonLocation,
      };
    default:
      return state;
  }
};
export default location;
