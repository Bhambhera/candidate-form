import React from "react"
import { CalendarViewMonthOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { MobileDatePicker } from "@mui/x-date-pickers"
import { useState } from "react"
import moment from "moment"

const CustomDatePicker = ({ date, ...props}) => {
    const [open, setOpen] = useState(false)
  
    const handleClick = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
    
  
    return (
      <>
        <MobileDatePicker
          value={moment(date).toDate()}
          open={open}
          toolbarTitle="Select Month"
          onClose={handleClose}
          disableFuture
          {...props}
          // ToolbarComponent={<></>}
          showToolbar={false}
          disableOpenPicker
          views={['month', 'year', 'day']}
          renderInput={() => (
            <IconButton onClick={handleClick}>
              <CalendarViewMonthOutlined />
            </IconButton>
          )}
        ></MobileDatePicker>
      </>
    )
  }
  export default CustomDatePicker