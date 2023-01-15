import { createContext, useState } from "react";

const ValueContext = createContext({});

export const ValueProvider = ({ children }) => {
    const [fromValue, setFromValue] = useState({
        "_id": "6334186a247c5bf04496e838",
        "name": "Dhaka,Hazrat Shahjalal International Airport (DAC)"
    })
    const [toValue, setToValue] = useState({
        "_id": "6334186a247c5bf044970863",
        "name": "Coxs Bazaar,Coxs Bazar Airport (CXB)"
    })

    const date = new Date();
    const [travelDate, setTravelDate] = useState(date);

    const [selectedFlight, setSelectedFlight] = useState({})

    return (
        <ValueContext.Provider value={ { toValue, setToValue, fromValue, setFromValue, travelDate, setTravelDate, selectedFlight, setSelectedFlight } }>
            { children }
        </ValueContext.Provider>
    )
}


export default ValueContext;