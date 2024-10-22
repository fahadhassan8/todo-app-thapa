import { useState } from "react";


export const TodoDate = () => {
  // todo date time
  const [dateTime, setDateTime] = useState();

  setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate} ${formattedTime}`);
  }, 1000);

    return (
    <>
      <header>
          <h1>Todo List</h1>
          <h3 className="date-time">{dateTime}</h3>
        </header> 
    </>
  )
}

