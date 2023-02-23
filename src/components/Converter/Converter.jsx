import './Converter.css'
import { useState, useEffect } from "react"

import { postSaved } from '../../fetchFunctions'
import { getSaved } from '../../fetchFunctions'

const Converter = (props) => {
    const [unit, setUnit] = useState("km")
    const [unitConverted, setUnitConverted] = useState("miles")
    const [value, setValue] = useState(0)
    const [valueConverted, setValueConverted] = useState(0)

    const entry = {value, unit, valueConverted, unitConverted}
    const changeStatus = props.changeStatus

    useEffect(() => {
        convert()
    }, [value])

    const changeUnits = (e) => {
        const value = e.target.value

        switch (value) {
            case "km-miles": 
                setUnit("km")
                setUnitConverted("miles")
                convert()
                break
            case "miles-km": 
                setUnit("miles")
                setUnitConverted("km")
                convert()
                break
            case "feet-meters": 
                setUnit("feet")
                setUnitConverted("meters")
                convert()
                break
            case "meters-feet": 
                setUnit("meters")
                setUnitConverted("feet")
                convert()
                break
            case "inches-cm": 
                setUnit("inches")
                setUnitConverted("cm")
                convert()
                break
            case "cm-inches": 
                setUnit("cm")
                setUnitConverted("inches")
                convert()
                break
            
        }
    }

    const switchUnits = () => { 
        const tempValue = value

        switch(unit) {
            case("km"):
                setUnit("miles")
                setUnitConverted("km")
                setValue(valueConverted)
                setValueConverted(tempValue)
                break
            case("miles"):
                setUnit("km")
                setUnitConverted("miles")
                setValue(valueConverted)
                setValueConverted(tempValue)
                break
            case("meters"):
                setUnit("feet")
                setUnitConverted("meters")
                setValue(valueConverted)
                setValueConverted(tempValue)
                break
            case("feet"):
                setUnit("meters")
                setUnitConverted("feet")
                setValue(valueConverted)
                setValueConverted(tempValue)
                break
            case("cm"):
                setUnit("inches")
                setUnitConverted("cm")
                setValue(valueConverted)
                setValueConverted(tempValue)
                break
            case("inches"):
                setUnit("cm")
                setUnitConverted("inches")
                setValue(valueConverted)
                setValueConverted(tempValue)
                break
        }
    }

    const convert = () => {
        switch(unit) {
            case("km"):
                setValueConverted((value * 0.621371).toFixed(2))
                break
            case("miles"):
                setValueConverted((value * 1.60934).toFixed(2))
                break
            case("meters"):
                setValueConverted((value * 3.28084).toFixed(2))
                break
            case("feet"):
                setValueConverted((value * 0.3048).toFixed(2))
                break
            case("cm"):
                setValueConverted((value * 0.393701).toFixed(2))
                break
            case("inches"):
                setValueConverted((value * 2.54).toFixed(2))
                break
            }
            }

    const addEntry = (entry) => {
        postSaved(entry)
        getSaved()
        .then(res => props.updateSave(res))
        props.changer(!changeStatus)
    }

    return (
        <section className="converter">
            <div className="converter-container">
                <h2>convert</h2>
                <div className="converter-grid">
                    <select name="measures" id="measures" onChange={changeUnits}>
                        <option value="km-miles">km → miles</option>
                        <option value="miles-km">miles → km</option>
                        <option value="meters-feet">meters → feet</option>
                        <option value="feet-meters">feet → meters</option>
                        <option value="cm-inches">cm → inches</option>
                        <option value="inches-cm">inches → cm</option>
                    </select>
                    <i 
                        className="fa-solid fa-arrow-right-arrow-left"
                        onClick={switchUnits}
                         ></i>
                    <input 
                        type="number" 
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}/>
                    <p>{unit}</p>
                </div>
                <div className="converter-result">
                    <i className="fa-regular fa-heart" onClick={() => {addEntry(entry)}}    
                    ></i>
                    <p>{valueConverted + " " + unitConverted}</p>
                </div>
            </div>
        </section>
    )
}

export default Converter