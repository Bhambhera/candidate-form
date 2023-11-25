import * as React from 'react'
import styled from "@emotion/styled"
import { CircularProgress, Button, Typography, useMediaQuery, Tooltip, Box, useTheme } from "@mui/material"
import {CenteredBox} from  "../Layouts/Common/Boxes"

const SubmitButtonStyled = styled(Button)(({ theme, color }) => ({
    background: color ?? theme.palette.primary.main,
    color: theme.palette.light.main,
    width: '100%',
    minWidth: '200px',
    padding: theme.spacing(3),
  
  }))
  
  const ResetButtonStyled = styled(Button)(({ theme, color }) => ({
  
    background: color ?? 'transparent',
    width: '100%',
    minWidth: '200px',
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      minWidth: '100px',
      padding: theme.spacing(1),
    }
  
  }))
  
  const ActionButtonStyled = styled(Button)(({ theme, color, active }) => ({
  
    background: active ? theme.palette.primary.main : color ?? theme.palette.light.main,
    border: "1px solid " + theme.palette.primary.calender,
    color: active ? color ?? theme.palette.light.main : theme.palette.primary.calender,
    fontWeight: "600",
    width: '100%',
    minWidth: '100px',
    letterSpacing: "1px",
    height: "100%",
    padding: theme.spacing(3),
  
    ":hover": {
      color: color ?? theme.palette.light.main,
      background: theme.palette.primary.main,
    }
  
  }))
  const ActionButtonStyledMobile = styled(Button)(({ theme, color, active }) => ({
  
    background: active ? theme.palette.primary.main : (color ?? theme.palette.light.main),
    border: "1px solid " + theme.palette.primary.calender,
    color: active ? color ?? theme.palette.light.main : theme.palette.primary.calender,
    fontWeight: "600",
    width: '100%',
    maxWidth: "50px",
    height: "50px",
    minWidth: "unset",
    letterSpacing: "1px",
  
    borderRadius: "100% !important",
  
    ":hover": {
      color: color ?? theme.palette.light.main,
      background: theme.palette.primary.main,
    },
    ":disabled": {
      background: "red !important",
      border: "1px solid red !important",
    }
  
  }))
  const SubmitButton = ({ title, loading, ...props }) => {
    return (
      <SubmitButtonStyled variant="contained" {...props} >
        {props.icon}
        {!loading && title}
  
        {loading && <CircularProgress size={25} color="light" ml={4} />}
      </SubmitButtonStyled>
    )
  }
  
  export const ResetButton = ({ title, loading, ...props }) => {
    return (
      <ResetButtonStyled variant="text" {...props} >
        {props.icon}
        {!loading && title}
  
        {loading && <CircularProgress size={25} color="light" ml={4} />}
      </ResetButtonStyled>
    )
  }
  export const ActionButton = ({ title, loading, icon, after, ...props }) => {
  
  
  
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));
  
    if (desktop)
      return (
        <ActionButtonStyled disableElevation variant="text" {...props} >
          <>
          {icon}
          &nbsp;
          </>
         
        
          {!loading && title}
  
          {loading && <CircularProgress size={25} color="light" ml={4} />}
        </ActionButtonStyled>
      )
  
  
    return <CenteredBox sx={{ display: "flex", flexDirection: "column", flex: 1 }} >
      <Tooltip title={title} >
        <ActionButtonStyledMobile {...props}>
          {loading ? <Box>
            <CircularProgress color='grey' />
          </Box> : icon}
          { }
        </ActionButtonStyledMobile>
      </Tooltip>
      <Typography mt={1} variant='caption' >{title}</Typography>
    </CenteredBox>
  }
  export default SubmitButton