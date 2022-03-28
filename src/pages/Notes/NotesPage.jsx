import React,{ useState} from "react";
import Sidebar from "../../Layout/sidebar/Sidebar";
import Header from "../../Layout/Header/Header";

export const NotesPage = () => {
  const [sidebar,setSidebar] = useState(false);

  const toggle = () => setSidebar(!sidebar)
  return (
    <div className="notes">
      <Header toggle={toggle}/>
      <Sidebar sidebar ={sidebar}/>
    </div>
  );
};
