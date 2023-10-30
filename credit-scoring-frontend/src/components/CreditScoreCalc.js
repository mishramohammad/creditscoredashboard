import React, { useState } from 'react';
import './CreditScoreCalc.css'; // Import the CSS file

function CreditScoreCalc() {
    const [income, setIncome] = useState(0);
    const [creditHistory, setCreditHistory] = useState(0);
    const [outstandingDebt, setOutstandingDebt] = useState(0);
    const [creditScore, setCreditScore] = useState(null);

    const calculateCreditScore = () => {
        // Example calculation:
        const calculatedScore = income * 0.6 + creditHistory * 0.3 - outstandingDebt * 0.1;
        setCreditScore(calculatedScore);
    };

    return (
        <div className="CreditScoreCalc-Container">
            <h2>Credit Score Calculator</h2>
            <form>
                <div>
                    <label>Income:</label>
                    <input type="number" value={income} onChange={(e) => setIncome(parseFloat(e.target.value))} />
                </div>
                <div>
                    <label>Credit History:</label>
                    <input type="number" value={creditHistory} onChange={(e) => setCreditHistory(parseInt(e.target.value))} />
                </div>
                <div>
                    <label>Outstanding Debt:</label>
                    <input type="number" value={outstandingDebt} onChange={(e) => setOutstandingDebt(parseFloat(e.target.value))} />
                </div>
                <button className="CreditScoreCalc-Button" onClick={calculateCreditScore}>
                    Calculate Credit Score
                </button>
            </form>
            {creditScore !== null && (
                <div>
                    <p>Credit Score: {creditScore}</p>
                </div>
            )}
        </div>
    );
}

export default CreditScoreCalc;
