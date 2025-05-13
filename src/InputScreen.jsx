import React, { useState, useEffect } from "react";

const INITIAL_FORM = {
    hash: "Left",
    ballOn: 25,
    down: 1,
    distance: 10,
    backfield: "ace",
    TE: "none",
    formation: "strong",
    formationDirection: "right",
    play: "lead",
    hole: "1",
    result: 0,
    defensiveFront: "40",
    defensiveBlitz: "none",
    defensiveCoverage: "0",
};

export default function InputScreen() {
    const [form, setForm] = useState(INITIAL_FORM);

    // Load plays from localStorage on mount
    const [plays, setPlays] = useState([]);
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("plays") || "[]");
        setPlays(saved);
    }, []);

    // Handle any input/select change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    // Add the play to state + localStorage
    const handleAdd = () => {
        const updated = [...plays, form];
        setPlays(updated);
        localStorage.setItem("plays", JSON.stringify(updated));
        setForm(INITIAL_FORM);
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Input Screen</h1>
            <div style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}>
                <label>
                    Hash
                    <select name="hash" value={form.hash} onChange={handleChange}>
                        {["Left", "Middle", "Right"].map((h) => (
                            <option key={h} value={h}>{h}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Ball On (−49…50)
                    <input
                        type="number"
                        name="ballOn"
                        value={form.ballOn}
                        onChange={handleChange}
                        min={-49}
                        max={50}
                    />
                </label>

                <label>
                    Down
                    <input
                        type="number"
                        name="down"
                        value={form.down}
                        onChange={handleChange}
                        min={1}
                        max={4}
                    />
                </label>

                <label>
                    Distance
                    <input
                        type="number"
                        name="distance"
                        value={form.distance}
                        onChange={handleChange}
                        min={1}
                        max={99}
                    />
                </label>

                <label>
                    Backfield
                    <select name="backfield" value={form.backfield} onChange={handleChange}>
                        {["ace", "split", "red", "blue", "empty"].map((b) => (
                            <option key={b} value={b}>{b}</option>
                        ))}
                    </select>
                </label>

                <label>
                    TE
                    <select name="TE" value={form.TE} onChange={handleChange}>
                        {["flex", "none"].map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Formation
                    <select name="formation" value={form.formation} onChange={handleChange}>
                        {["strong", "slot", "diesel", "trey", "trips"].map((f) => (
                            <option key={f} value={f}>{f}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Formation Direction
                    <select
                        name="formationDirection"
                        value={form.formationDirection}
                        onChange={handleChange}
                    >
                        {["right", "left"].map((d) => (
                            <option key={d} value={d}>{d}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Play
                    <select name="play" value={form.play} onChange={handleChange}>
                        {["lead","veer","counter","midline","power"].map((p) => (
                            <option key={p} value={p}>{p}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Hole
                    <select name="hole" value={form.hole} onChange={handleChange}>
                        {["1","12","13","14","16","17","18","9","38","22"].map((h) => (
                            <option key={h} value={h}>{h}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Result (−99…99)
                    <input
                        type="number"
                        name="result"
                        value={form.result}
                        onChange={handleChange}
                        min={-99}
                        max={99}
                    />
                </label>

                <label>
                    Defensive Front
                    <select
                        name="defensiveFront"
                        value={form.defensiveFront}
                        onChange={handleChange}
                    >
                        {["40","50"].map((f) => (
                            <option key={f} value={f}>{f}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Defensive Blitz
                    <select
                        name="defensiveBlitz"
                        value={form.defensiveBlitz}
                        onChange={handleChange}
                    >
                        {["none","inside","outside"].map((b) => (
                            <option key={b} value={b}>{b}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Defensive Coverage
                    <select
                        name="defensiveCoverage"
                        value={form.defensiveCoverage}
                        onChange={handleChange}
                    >
                        {["0","1","2","3","4"].map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </label>

                <button onClick={handleAdd}>Add Play</button>
            </div>
        </div>
    );
}
