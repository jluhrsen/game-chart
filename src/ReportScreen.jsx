import React, { useState, useEffect } from "react";

export default function ReportScreen() {
    const [plays, setPlays] = useState([]);

    useEffect(() => {
        setPlays(JSON.parse(localStorage.getItem("plays") || "[]"));
    }, []);

    if (plays.length === 0) {
        return (
            <div style={{ padding: "2rem" }}>
                <h1>Report Screen</h1>
                <p>No plays entered yet.</p>
            </div>
        );
    }

    const headers = Object.keys(plays[0]);

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Report Screen</h1>
            <table border="1" cellPadding="6">
                <thead>
                <tr>
                    {headers.map((h) => (
                        <th key={h}>{h}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {plays.map((play, idx) => (
                    <tr key={idx}>
                        {headers.map((h) => (
                            <td key={h}>{play[h]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
