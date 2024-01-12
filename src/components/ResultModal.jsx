import { forwardRef } from "react"
const ResultModal = forwardRef(function ResultModal({targetTime, result}, ref) {
    return (
        <dialog ref={ref} className="result-modal">
            <h2>You {result}</h2>
            <p>The Target time was <strong>{targetTime}</strong></p>
            <p>You stopped the timer with <strong>X seconds  left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;