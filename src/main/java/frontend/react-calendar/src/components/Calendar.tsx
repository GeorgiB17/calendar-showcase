import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Calendar() {
 const [currentDate, setCurrentDate] = useState(new Date());
 const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
const daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hoursInDay = []
for (let i = 6; i < 24; i++) {
    hoursInDay.push(i < 10 ? `0${i}:00` : `${i}:00`);
 }

 function forwardDate() {
    setCurrentDate(prevDate => { 
        const nextDate = new Date(prevDate);
        nextDate.setDate(nextDate.getDate() + 7);
        return nextDate;
    });
 }
function backwardDate() {
   setCurrentDate(prevDate => {
        const nextDate = new Date(prevDate);
        nextDate.setDate(nextDate.getDate() - 7);
        return nextDate;
    })
}


  return <div   className="calendar"> 
  <button className="btn btn-primary" onClick={backwardDate}>{"<"}</button>
  <button className="btn btn-primary" onClick={() => setCurrentDate(new Date())}>Today</button>
  <button className="btn btn-primary" onClick={forwardDate}>{">"}</button>
  <h1>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h1>
  <table className="table table-bordered">   
     <thead>
     <tr>
        <th></th>
        {
         
        daysInWeek.map((day,index ) => { 
         const currentDayIndex = (new Date().getDay() + 6) % 7;
          const dateForDay = new Date(currentDate);
           dateForDay.setDate(dateForDay.getDate() + index);

            return <th style={{ textAlign: "center", backgroundColor: index === currentDayIndex ?
               "lightblue" : "white"
             }} key={day}>
               {day} {dateForDay.getDate()} 
            </th>

        })}
     </tr>
     {hoursInDay.map((hour, hourIndex) => {
        return <tr key={hourIndex}>
            <td>{hour}</td>
            {daysInWeek.map((day) => {
            return <td key={day + hourIndex}></td>
            }
         )}

        </tr>

      })}
     
      
      
      
     

     </thead>

     </table>
  
  
  </div>
}

export default Calendar;
