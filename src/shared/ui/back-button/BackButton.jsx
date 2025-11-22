import {useNavigate} from "react-router-dom";
import './BackButton.scss';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <button onClick={handleGoBack} className="back-button">
      назад
    </button>
  )
}

export default BackButton;