import configureMockStore from "redux-mock-store";
import { store } from "../app/store";
const mockStore = configureMockStore();
export const testStore = mockStore(store.getState());
export const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
