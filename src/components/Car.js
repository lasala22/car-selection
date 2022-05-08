import { useState } from 'react';
export default function Car() {
    let [selectedCar, setSelectedCar] = useState("");
    let [selectedColor, setSelectedColor] = useState("");
    return (
        <div>
            <div>
                Select a car
                <select onChange={(e) => setSelectedCar(e.target.value)}>
                    <option value={"Honda"}>Honda</option>
                    <option value={"Ferrari"}>Ferrari</option>
                    <option value={"Toyota"}>Toyota</option>
                </select>
            </div>
            <div>
                Select a color
                <select onChange={(e) => setSelectedColor(e.target.value)}>
                    <option value={"Black"}>Black</option>
                    <option value={"Red"}>Red</option>
                    <option value={"White"}>White</option>
                </select>
            </div>
            <h2>You selected a {selectedColor} - {selectedCar}</h2>
        </div>
    )
}