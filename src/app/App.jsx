import { HeaderPage } from "@/widgets/index.js";
import './styles/App.css';
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <HeaderPage />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;