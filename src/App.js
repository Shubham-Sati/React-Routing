import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Backdrop from "./components/Backdrop";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Subscribtion from "./pages/Subscriptions";
import Library from "./pages/Library";
import History from "./pages/History";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideabarIcons from "./components/SideabarIcons";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;
const Content = styled.div`
  height: 92%;
  width: 100%;
  display: flex;
`;

function App() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <Wrapper>
      <BrowserRouter>
        <Navbar openSidebar={toggleSidebar} />
        <Backdrop sidebar={sidebar} openSidebar={toggleSidebar} />
        <Sidebar sidebar={sidebar} openSidebar={toggleSidebar} />
        <Content>
          <SideabarIcons />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="videos" element={<Videos />} />
              <Route path="subscriptions" element={<Subscribtion />} />
              <Route path="library" element={<Library />} />
              <Route path="history" element={<History />} />
            </Route>
          </Routes>
        </Content>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
