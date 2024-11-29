import Topbar from "./components/page/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./components/page/global/sidebar"
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/page/Dashboard";
import Team from "./components/page/team";
import Contacts from "./components/page/contacts";
import Invoices from "./components/page/Invoices";
import Form from "./components/page/form";
import Geography from "./components/page/geography"
import { useState } from "react";
import Bar from "./components/page/bar";
import Line from "./components/page/line";
import Pie from "./components/page/pie";
import FAQ from "./components/page/faq";

//import calendar  from "./co/mponents/page/calendar/calendar";


function App() {
  const [theme, colorMode] = useMode();
  const [iscollapsed, setIscolapsed]=useState(true);
  
  const handlechangesidebarwidth=()=>{
    setIscolapsed(!iscollapsed);
  }
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar handlechangesidebar = {handlechangesidebarwidth}/>
            <Sidebar iscollapsed={iscollapsed} />
              <div style={{ 
                marginLeft:iscollapsed ? "60px":"240px",
                transition:"margin 0.3s ease",
                padding:"20px"

              }}>
            { <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} /> 
              <Route path="/Invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/Bar" element={<Bar />} />
              <Route path="/Line" element={<Line />} />
              <Route path="/Pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
             {/* <Route path="/calendar" element={<Calendar/>} /> */}
            </Routes> }
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )}

export default App
