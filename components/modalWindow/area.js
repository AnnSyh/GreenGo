// import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, CardContent, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
// import "../../styles/slider.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
// import style from "../../styles/FormSection.module.css";
import style from "./../../styles/FormSection.module.css";

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

const BootstrapDialogTitle = (props) =>
{
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
						color: (theme) => theme.palette.grey[ 500 ],
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

export default function ModalWindow({ open, handleClose, project })
{
	// console.log("project = ", project);
	const [ showButton, setShowButton ] = useState(true);
	// const [showMessage, setShowMessage] = useState(false);
	const nodeRef = useRef(null);

	const formik = useFormik({
		initialValues: {
			message: "",
		},
		validationSchema: Yup.object({
			message: Yup.string().required("required"),
		}),
		onSubmit: (values) =>
		{
			// alert(JSON.stringify(values, null, 2));
			setLoader(true);
			const data = {
				message: values.message,
			};
			fetch("/api/contact", {
				method: "POST",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},

				body: JSON.stringify(data),
			}).then((res) =>
			{
				if (res.status === 200)
				{
					setLoader(false);
					setCheckForm(false);
					// setOpen(false);
					setSnakbar(true);
				} else
				{
					setLoader(false);
					setSnakbar(false);
				}
			});
		},
	});

	return (
		<div>
			<CSSTransition
				in={open}
				nodeRef={nodeRef}
				timeout={300}
				classNames="alert"
				unmountOnExit
				onEnter={() => setShowButton(false)}
				onExited={() => setShowButton(true)}
			>
				<BootstrapDialog
					ref={nodeRef}
					sx={{
						borderRadius: "20px",
						// maxWidth: "600px",
						margin: "auto",
					}}
					onClose={handleClose}
					open={open}
				// onClick={() => {
				//   setShowMessage(true);
				//   console.log("!!!!");
				// }}
				>
					<Box sx={{ maxWidth: "600px" }}>
						<BootstrapDialogTitle
							onClose={handleClose}
							sx={{ textAlign: "center" }}
						>
							Surf coach {project.id}  bg-color = {project.preFillColor}
						</BootstrapDialogTitle>
						<DialogContent dividers>
							<CardContent>
								<Typography variant="body1" color="text.secondary" paragraph>
									{/* ------area-----------
									{project.id} */}
									What do you find the most attractive about this job?
								</Typography>
								<Box component='form'>
									<TextField
										className={style.textField}
										value={formik.values.name}
										onChange={formik.handleChange}
										id="name"
										fullWidth
										name="name"
										placeholder={"enter_your_name"}
									// error={formik.touched.name && Boolean(formik.errors.name)}
									// helpertext={formik.touched.name && formik.errors.name}
									/>
									<Typography sx={{ color: "red" }}>
										{formik.touched.name && formik.errors.name}
									</Typography>
									<Button
										className="btn-contacts"
										variant="contained"
										sx={{ marginTop: "0px" }}
									>
										i'm done!
									</Button>
								</Box>

							</CardContent>
						</DialogContent>
					</Box>
				</BootstrapDialog>
			</CSSTransition>
		</div>
	);
}
