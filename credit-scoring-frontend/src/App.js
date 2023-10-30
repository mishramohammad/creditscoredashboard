import React from 'react';
import DataEntry from './components/DataEntry';
import Report from './components/Report';
import CreditScoreCalc from './components/CreditScoreCalc';


function App() {
    return (
        <div className="App">
         <CreditScoreCalc/>
         <Report/>
        </div>
    );
}

export default App;
