import {Box, IconButton, useTheme} from "@mui/material";
import { useContext, useState } from "react";
//import AppBar from "@mui/material";
import { ColorModeContext, tokens } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkMode';
import NotificationOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { MenuItem } from "react-pro-sidebar";



const Topbar = (props) => {
  const theme = useTheme();
  const colors = tokens (theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [IsCollapsed, setIsCollapse] = useState(false);
 

  return (
  <Box display="flex" justifyContent="space-between"  p={2}
  sex={{backgroundcolor: "green", color:"white"}}>
    <Box>
    <MenuItem
            onClick={()=> props.handlechangesidebar()}
            icon={IsCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "0px 0 0px 0",
              color: colors.gray[100],
            }}
          >
          { !IsCollapsed && (
            <Box
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            ml="0px"
            >
          <IconButton onClick={()=> props.handlechangesidebar()}>
            <MenuOutlinedIcon />
          </IconButton>
          </Box>
          )}
      </MenuItem>
    </Box>
    <Box 
      display = "flex" 
      height={40}
      backgroundColor={colors.greenAccent[800]} 
      borderRadius= "3px">
        <InputBase sx={{ ml: 2, flex: 1}} placeholder= "search" />
        <IconButton type="button" sx = {{p:1}}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={colorMode.toggleColorMode} >
          {theme.palette.mode === 'dark'?(
            < DarkModeOutlinedIcon />
          ):(
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton >
          <NotificationOutlinedIcon />
        </IconButton>
        <IconButton >
          <PersonOutlineIcon />
        </IconButton>
        <IconButton >
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton >

        </IconButton>
    </Box>   
  </Box>
    
  )
}

export default Topbar;