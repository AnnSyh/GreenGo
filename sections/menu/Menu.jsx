import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  makeStyles,
  useTheme,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Menu(props) {
  const menuItems = [
    {
      pageName: "Homepage",
      link: "/",
    },
    {
      pageName: "Contacts",
      link: "/contacts",
    },
  ];
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <Drawer anchor="left" open={props.isOpen} onClose={props.close}>
        <Box
          sx={{
            width: 200,
            color: "#fff",
            backgroundColor: "#00b398",
            height: "100%",
          }}
          role="presentation"
          onClick={props.close}
          onKeyDown={props.close}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component="a" href={item.link}>
                  <ListItemIcon sx={{ color: "#A6B828" }}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.pageName} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
