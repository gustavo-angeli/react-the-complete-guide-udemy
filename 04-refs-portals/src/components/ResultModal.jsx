import { forwardRef, useImperativeHandle, useRef } from "react"
import {createPortal} from 'react-dom'

const ResultModal = forwardRef(
    function ResultModal({ result, targetTime, remainingTime, onReset }, ref) {
        const dialog = useRef();

        const userLost = remainingTime <= 0;
        const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
        
        useImperativeHandle(ref, () => {
            return {
                open() {
                    dialog.current.showModal();
                }
            };
        });

        return createPortal(
            <dialog ref={dialog} className="result-modal">
                {userLost && <h2>You Lost</h2>}
                <p>The target time was <strong>{targetTime} seconds.</strong></p>
                <p>You stopped timer with <strong>{formattedRemainingTime}</strong> seconds left</p>
                <form method="dialog">
                    <button onSubmit={onReset}>Close</button>
                </form>
            </dialog>,
            document.getElementById("modal")
        )
    }
)

export default ResultModal;