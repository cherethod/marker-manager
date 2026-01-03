import "./App.css";
import { AsideMenu } from "./components/AsideMenu";
import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("explorer");

  function handleSectionClick(sectionName) {
    setActiveSection(sectionName);
  }
  return (
    <>
      <Header />
      <main>
        <AsideMenu
          activeSection={activeSection}
          handleSectionClick={handleSectionClick}
        />
        <SideBar className={`left-sidebar ${!activeSection ? "collapsed" : ""}`}>
          {activeSection === "explorer" && <p>Explorer Content</p>}
          {activeSection === "search" && <p>Search Content</p>}
          {activeSection === "git" && <p>Git Content</p>}
          {activeSection === "blocks" && <p>Blocks Content</p>}
        </SideBar>
        <div className="content"></div>
        <SideBar className="right-sidebar">
          <p>Main Content</p>
        </SideBar>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
