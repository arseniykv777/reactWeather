import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const useSearchInput = () => {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  return e => {
    const value = e.target.value;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      navigate(`/current/${value}`);
    }, 300)
  };
}

export default useSearchInput;