import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { CardMedia, CardContent } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    maxWidth: "1000px",
    borderRadius: 15,
    maxHeight: "calc(100%)",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModalWindow({ open, handleClose, project }) {
  // console.log("project = ", project);

  return (
    <div>
      <BootstrapDialog
        sx={{
          borderRadius: "20px",
          maxWidth: "600px",
          margin: "auto",
        }}
        onClose={handleClose}
        open={open}
      >
        <BootstrapDialogTitle
          onClose={handleClose}
          sx={{ textAlign: "center" }}
        >
          {project.position}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <CardMedia
            component="img"
            height="400"
            image={project.image}
            alt="image project"
            sx={{
              width: "100%",
              height: "auto",
              padding: "15px",
              borderRadius: "15px",
            }}
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary" paragraph>
              {project.desc}
            </Typography>
          </CardContent>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
