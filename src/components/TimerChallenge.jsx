import { useState, useRef } from "react"

import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);

    const timeIsActive = timeRemaining>0&&timeRemaining<targetTime*1000;

    if(timeRemaining<=0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime*1000) // this kind of statement can cause infinite loop, so be careful with the condn which is executong this
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRem => prevTimeRem-10);
        }, 10)
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }
    
    return (<>
        <ResultModal onReset={handleReset} ref={dialog} targetTime={targetTime} remainingTime={timeRemaining}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timeIsActive ? handleStop : handleStart}>
                    {timeIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timeIsActive ? 'active' : ''}>
                {timeIsActive ? 'Time is Running...' : 'Timer Inactive'}
            </p>
        </section>
    </>
    )
}