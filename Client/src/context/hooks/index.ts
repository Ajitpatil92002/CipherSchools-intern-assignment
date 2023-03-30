export type State = {
  name: string | null;
  email: string | null;
  about: string | null;
  webLinks: {
    facebook: string | null;
    instagram: string | null;
    github: string | null;
    website: string | null;
    twitter: string | null;
    linkedIn: string | null;
  };
  professionalInfo: {
    highestEducation: string | null;
    currentOccupation: string | null;
  };
  interests: string[];
};

export type Action =
  | { type: "SET_NAME"; payload: string | null }
  | { type: "SET_EMAIL"; payload: string | null }
  | { type: "SET_ABOUT"; payload: string | null }
  | { type: "SET_WEBLINK"; payload: { key: string; value: string | null } }
  | {
      type: "SET_PROFESSIONAL_INFO";
      payload: { key: string; value: string | null };
    }
  | { type: "SET_INTERESTS"; payload: string[] }
  | { type: "SET_STATE"; payload: State };

export const initialState: State = {
  name: null,
  email: null,
  about: null,
  webLinks: {
    facebook: null,
    instagram: null,
    github: null,
    website: null,
    twitter: null,
    linkedIn: null,
  },
  professionalInfo: {
    highestEducation: null,
    currentOccupation: null,
  },
  interests: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_ABOUT":
      return { ...state, about: action.payload };
    case "SET_WEBLINK":
      return {
        ...state,
        webLinks: {
          ...state.webLinks,
          [action.payload.key]: action.payload.value,
        },
      };
    case "SET_PROFESSIONAL_INFO":
      return {
        ...state,
        professionalInfo: {
          ...state.professionalInfo,
          [action.payload.key]: action.payload.value,
        },
      };
    case "SET_INTERESTS":
      return { ...state, interests: [...state.interests, ...action.payload] };
    case "SET_STATE":
      return { ...action.payload };
    default:
      throw new Error(`Unhandled action type`);
  }
};
