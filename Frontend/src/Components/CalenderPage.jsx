import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { fetchApi } from "../Controller/Controller";
import StatusShown from "./StatusShown";

function CalenderPage() {
  const [open, setOpen] = useState(false);

 

  const handleClose = () => {
    setOpen(false);
  };

  const [date, setDate] = useState(new Date());

  function handleDateClick(date) {
    console.log(date);
    console.log(typeof date);
    setDate(date);
    setOpen(true);
  }

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div>
      <div>
        <Dialog  open={open} onClose={handleClose}>
          <DialogTitle>{formatDate(date)}</DialogTitle>
          <DialogContent><StatusShown TodayDate={formatDate(date)}/></DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <Calendar
        onClickDay={handleDateClick}
        value={date}
        className="calendar"
        tileClassName="calendar-tile"
      />
    </div>
  );
}

export default CalenderPage;
