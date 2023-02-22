import './Main.css'
import { getSaved } from '../../fetchFunctions'

import Header from "../../components/Header/Header"
import Converter from "../../components/Converter/Converter"
import Saved from '../../components/Saved/Saved'
import Footer from "../../components/Footer/Footer"
import { useEffect, useState } from 'react'

const Main = () => {
    const [saved, setSaved] = useState(null)
    const [hasChanged, setHasChanged] = useState(false)

    useEffect(() => {
        getSaved()
        .then(res => setSaved(res))
    }, [hasChanged])

    return (
    <>
        <Header />
        <main>
            <Converter updateSave={setSaved} changer={setHasChanged} changeStatus={hasChanged}/>
            <Saved saved={saved} updateSave={setSaved} changer={setHasChanged} changeStatus={hasChanged} />
        </main>
        <Footer />      
    </>
    )
}

export default Main