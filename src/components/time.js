import React, { useEffect, useState } from "react"
import timeStyles from "./time.module.scss"
function TimeComponent() {
  const [time, setTime] = useState(0)
  useEffect(() => {
    getTime();
    setInterval(() => {
      getTime();
    }, 1000)
  },[time])

  function getTime(){
    let today = new Date()
    let isTwelveHour, mins, hours
    mins = today.getMinutes()
    hours = today.getHours()
    if (hours - 12 > 0) {
      hours -= 12
      isTwelveHour = true
    }
    if (today.getMinutes() < 10) {
      mins = `0${today.getMinutes()}`
    }
    setTime(hours + ":" + mins + (isTwelveHour ? "pm" : "am"))
  }
  return (
    <div className={`widget time ${timeStyles.timeWrapper}`}>
      <div className={`time ${timeStyles.time}`}>{time}</div>
    </div>
  )
}
export default TimeComponent
