import { useEffect, useState } from "react";

const DELAY = 1000;

export function App() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (checked) {
                setChecked(false)
            }
        }, DELAY);

        return () => {
            clearTimeout(timerId);
        }
    })

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                    setChecked(e.target.checked);
                }}
            />
            <label>Check me</label>
        </div>
    );
}