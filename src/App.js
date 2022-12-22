import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Backdrop from "./components/Backdrop";
import { useState } from "react";

const Wrapper = styled.div``;

function App() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <Wrapper>
      <Navbar openSidebar={toggleSidebar} />
      <Backdrop sidebar={sidebar} openSidebar={toggleSidebar}/>
      <Sidebar sidebar={sidebar} openSidebar={toggleSidebar} />
    </Wrapper>
  );
}

export default App;
