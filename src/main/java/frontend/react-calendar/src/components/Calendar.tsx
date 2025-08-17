import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monday = new Date(currentDate);
  monday.setDate(monday.getDate() - ((currentDate.getDay() + 6) % 7));
  const today = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const hoursInDay = [];
  for (let i = 6; i < 23; i++) {
    hoursInDay.push(i < 10 ? `0${i}:00` : `${i}:00`);
  }

  function forwardDate() {
    setCurrentDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setDate(nextDate.getDate() + 7);
      return nextDate;
    });
  }
  function backwardDate() {
    setCurrentDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setDate(nextDate.getDate() - 7);
      return nextDate;
    });
  }

  return (
    <div className="calendar">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "-10px",
          marginLeft: "-10px",
        }}
      >
        <div>
          <h1
            style={{
              width: "300px",
              textAlign: "center",
              marginBottom: 25,
              marginLeft: "25px",
            }}
          >
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "10px",
            gap: "1px",
            marginBottom: 25,
          }}
        >
          <button
            className="btn btn-primary rounded-pill px-4 shadow-sm"
            onClick={backwardDate}
          >
            {"<"}
          </button>
          <button
            className="btn btn-primary rounded-pill px-4 shadow-sm"
            onClick={() => setCurrentDate(new Date())}
          >
            Today
          </button>
          <button
            className="btn btn-primary rounded-pill px-4 shadow-sm"
            onClick={forwardDate}
          >
            {">"}
          </button>
        </div>
      </div>
      <table
        className="table table-bordered"
        style={{ width: "95%", marginLeft: "25px" }}
      >
        <thead>
          <tr>
            <th></th>
            {daysInWeek.map((day, index) => {
              const dateForDay = new Date(monday);
              dateForDay.setDate(dateForDay.getDate() + index);
              const isToday =
                dateForDay.toDateString() === today.toDateString();

              return (
                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: isToday ? "lightblue" : "white",
                  }}
                  key={day}
                >
                  {day} {dateForDay.getDate()}
                </th>
              );
            })}
          </tr>
          {hoursInDay.map((hour, hourIndex) => {
            return (
              <tr key={hour + hourIndex}>
                <td>{hour}</td>
                {daysInWeek.map((day, index) => {
                  const dateForDay = new Date(monday);
                  dateForDay.setDate(dateForDay.getDate() + index);
                  const isToday =
                    dateForDay.toDateString() === today.toDateString();

                  return (
                    <td
                      key={day + hourIndex}
                      style={{
                        backgroundColor: isToday ? "lightblue" : "white",
                      }}
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
}

export default Calendar;
