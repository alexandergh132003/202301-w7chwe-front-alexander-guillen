import { Provider } from "react-redux";
import { testStore } from "./data";

interface FakeWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const FakeWrapper = ({ children }: FakeWrapperProps): JSX.Element => {
  return <Provider store={testStore}>{children}</Provider>;
};

export default FakeWrapper;
