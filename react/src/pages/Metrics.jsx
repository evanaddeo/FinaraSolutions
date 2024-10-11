import React from "react";
import Header from '../components/Header'

function Metrics() {
    return (
        <div>
            <Header signedIn={true} selectedBtnId='metrics' />
            <p>Metrics</p>
        </div>
    )
}

export default Metrics;