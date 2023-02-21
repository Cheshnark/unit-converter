import './Main.css'

import Header from "../../components/Header/Header"
import Converter from "../../components/Converter/Converter"
import Footer from "../../components/Footer/Footer"

const Main = () => {
    const saved = [
        "100 miles es mazo",
        "rubu",
        "Siluro",
        "Bravo Murillo"
    ]

    return (
    <>
        <Header />
        <main>
            <Converter />
            <section className="saved">
                <h3>saved</h3>
                <div className="saved-entries">
                {saved &&
                    saved.map((entry, i) => {
                    return (
                        <div className="entry">
                            <p>{entry}</p>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    )
                })}
                </div>
            </section>
        </main>
        <Footer />      
    </>
    )
}

export default Main