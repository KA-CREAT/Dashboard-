import { useState } from "react";
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, Typography, useTheme } from "@mui/material";
import {Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
//import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { tokens } from "../../../theme";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.gray[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [props.iscollapsed, setIsCollapse] = useState(props.props.iscollapsed);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box sx={{
      "& .pro-sidebar-inner":{
        backgroundColor:"white !important",
      },
      "& .pro-sidebar-inner-footer":{
        backgroundColor:"blue !important",
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "&.pro-inner-item:hover":{
        color:"lightgreen !important"
       }, 
       "&.pro-inner-item.active":{
        color:"green !important"
       },

       "& .pro-menu-itemsidebar-content": {
        backgroundColor: "!important"
       },
    }}>
    <ProSidebar collapsed={props.iscollapsed} className="" style={{"position":"fixed"}} >
        <Menu iconShape="square">
      {!props.iscollapsed && (
            <Box mb="0px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="Admin"
                  width="100px"
                  height="100px"
                  src={`../../Asset/ArifPay.png`}
                  style={{ cursor: "pointer", borderRadius: "10%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  ArifPay Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={props.iscollapsed ? undefined : "1%"}> 
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Box> 
      </Menu>
    </ProSidebar>  
    </Box>
  )
}

export default Sidebar;