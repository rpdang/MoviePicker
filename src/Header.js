import { AppBar, Toolbar, Typography, makeStyles, Button} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";


const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#006D77",
      paddingRight: "79px",
      paddingLeft: "118px",
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#83C5BE",
      textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
     },
     toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },

  }));


export default function Header() {

const headersData = [
    {
      label: "My list",
      href: "/listings",
    },
    {
      label: "Favourites",
      href: "/mentors",
    },
    {
      label: "Premium features",
      href: "/account",
    },
    {
      label: "Log Out",
      href: "/logout",
    },
  ];
  const { header, logo, menuButton, toolbar } = useStyles();

  const displayDesktop = () => {
    return   <Toolbar className={toolbar}>
    {femmecubatorLogo}
    <div>{getMenuButtons()}</div>
  </Toolbar>;
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Movie Picker
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton
        
          }}
        >
          {label}
        </Button>
      );
    });
  };
  
  return (
    <header>
       <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}