import { createContext, useState, FC } from "react";

interface ContextInterface {
  Username: string | null;
  [x: string | number | symbol]: unknown;
}

const GlobalContext = createContext<any>(null);
const { Provider } = GlobalContext;

export const GlobalProvider: FC<ContextInterface | null | any> = ({
  children,
}) => {
  const [Username, setUsername] = useState();

  return (
    <Provider
      value={{
        Username,
        setUsername,
      }}
    >
      {children}
    </Provider>
  );
};
