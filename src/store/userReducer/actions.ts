import { getVBUsersSummary } from "../api";

export const getVBUsers = () => {
  const res = getVBUsersSummary();
  return async (dispatch: any, getState: any) => {};
};
