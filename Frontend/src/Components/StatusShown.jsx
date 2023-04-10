import React, { useEffect, useState } from "react";
import { fetchApi } from "../Controller/Controller";
import "./StatusShown.css";
import { Button } from "@material-ui/core";

const StatusShown = (props) => {
  const [present, setPresent] = useState("No Status Found");
  const uri = "http://localhost:5000/Calender/present";

  useEffect(() => {
    fetchCalenderData();
    // console.log(props.TodayDate);
  });

  const fetchCalenderData = async () => {
    let data = await fetchApi("GET", uri, "");
    // console.log(data);
    // console.log(data.Data.length)

    let DataLength = data.Data.length;

    let BoolValue = await data.Data.filter((data, index) => {
      // console.log(DataLength)
      // console.log(data.Date);
      // console.log(index)
      if (data.Date == props.TodayDate) {
        console.log(data)
        if(data.status=="present")
        {
            setPresent("present");
        }
        else if(data.status=="absent")
        {
            setPresent("absent");
        } 
      } 


      
    });
  };

  const MarkasPresent = async (value) => {
    let payload;
    if (value == true) {
      payload = {
        Date: props.TodayDate,
        status: "present",
      };
    } else if (value == false) {
      payload = {
        Date: props.TodayDate,
        status: "absent",
      };
    }

    let data = await fetchApi("POST", uri, payload);
    console.log(data);
    if(data.message=="Present applied successfully!!")
    {
        alert("Congratulations! Task successfull!!");
        window.location.reload();
        
    }
  };

  if (present == "present") {
    return (
      <>
        <div className="present">present</div>
        <div className="my-5">
        <Button  style={{backgroundColor:"green",color:"white"}}  variant="contained"  onClick={() => {
              MarkasPresent(true);
            }} >
    Mark as present
</Button>
           <Button  style={{backgroundColor:"red",color:"white"}}  variant="contained"  onClick={() => {
              MarkasPresent(false);
            }} >
     Mark as Absent
</Button>
        </div>
      </>
    );
  }

  if (present == "absent") {
    return (
      <>
        <div className="absent">absent</div>
        <div className="my-5">
        <Button  style={{backgroundColor:"green",color:"white"}}  variant="contained"  onClick={() => {
              MarkasPresent(true);
            }} >
    Mark as Present
</Button>
           <Button  style={{backgroundColor:"red",color:"white"}}  variant="contained"  onClick={() => {
              MarkasPresent(false);
            }} >
    Mark as Absent
</Button>
        </div>
      </>
    );
  }
  if (present == "No Status Found") {
    return (
      <>
        <div className="notFound">No status found</div>
        <div  className="my-5">
        <Button  style={{backgroundColor:"green",color:"white"}}  variant="contained"  onClick={() => {
              MarkasPresent(true);
            }} >
    Mark as present
</Button>
           <Button  style={{backgroundColor:"red",color:"white"}}  variant="contained"  onClick={() => {
              MarkasPresent(false);
            }} >
     Mark as Absent
</Button>
        </div>
      </>
    );
  }
};

export default StatusShown;
