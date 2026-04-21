import React from "react";

class Countdown extends React.Component {
    targetDate = new Date("September 26, 2026 00:00:00")

    getTimeRemaining() {
        const diff = this.targetDate - new Date()
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0}
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60)
        }
    }

    state = this.getTimeRemaining()

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const remaining = this.getTimeRemaining()
            this.setState(remaining)
            if (Object.values(remaining).every(v => v === 0)) {
                clearInterval(this.myInterval)
            }
        }, 10)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { days, hours, minutes, seconds } = this.state
        return (
            <div>
            <h2 className="d-flex justify-content-center">Saturday, September 26th | 5:00pm</h2>
                {days === 0 && hours === 0 && minutes === 0 && seconds === 0
                    ? <h1>Today is the day!</h1>
                    : 
                
            <div className="time-box-wrapper d-flex justify-content-center">
              
              <div className="single-box p-3 text-center">
                <h3>{days}</h3>
                <p>Days</p>
              </div>
              
               <div className="single-box p-3 text-center">
                <h3>{hours}</h3>
                <p>Hours</p>
              </div>
              
               <div className="single-box p-3 text-center">
                <h3>{minutes}</h3>
                <p>Minutes</p>
              </div>
              
               <div className="single-box p-3 text-center">
                <h3>{seconds}</h3>
                <p>Seconds</p>
              </div>
              
            </div>
            }
           </div>
        )
    }
}

export default Countdown;
