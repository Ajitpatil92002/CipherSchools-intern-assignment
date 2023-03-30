import { createContext, useReducer } from "react";
import { Action, initialState, reducer, State } from "./hooks";

type UserContextProviderProp = {
  children: React.ReactNode;
};

type UserContextType = {
  user: State | null;
  dispatch: React.Dispatch<Action>;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({
  children,
}: UserContextProviderProp) {
  const [user, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ user, dispatch }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
