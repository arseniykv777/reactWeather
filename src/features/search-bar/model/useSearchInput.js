import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";

const useSearchInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const timeoutRef = useRef(null);

  return e => {
    if (e.key === "Enter") {
      if (location.pathname === '/') return;

      const value = e.target.value;
      const path = location.pathname.substring(1).split('/')[0];

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        navigate(`${path}/${value}`);
      }, 300)
    }
  };
}

export default useSearchInput;