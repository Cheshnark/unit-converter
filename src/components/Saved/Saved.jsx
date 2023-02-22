import './Saved.css'
import { useEffect, useState } from 'react'

import { getSaved } from '../../fetchFunctions'
import { deleteSaved } from '../../fetchFunctions'

const Saved = (props) => {
    const saved = props.saved
    const changeStatus = props.changeStatus

    const deleteIt = (entryId) =>{
        deleteSaved(entryId)
        getSaved()
        .then(res => props.updateSave(res))
        props.changer(!changeStatus)
    }
    
    return (
        <section className="saved">
            <h3>saved</h3>
            <div className="saved-entries">
            {saved &&
                saved.map((entry, i) => {
                return (
                    <div className="entry" key={i}>
                        <p>{entry.value + " " + entry.unit + " → " + entry.valueConverted + " "+ entry.unitConverted }</p>
                        <i className="fa-solid fa-xmark" onClick={() => deleteIt(entry._id)}></i>
                    </div>
                )
            })}
            </div>
        </section>
    )
}

export default Saved