import { useLocation } from "react-router";

export const useAuth = () => {
    return sessionStorage.getItem("sessionToken") !== '' && sessionStorage.getItem("sessionToken") !== null;
}

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}