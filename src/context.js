import { useState } from "react";
import { createContext, useContext } from "react";

import mensData from "./data/Mensdata";
import trendData from "./data/Trend";
import kgData from "./data/Kgdata";
import kbData from "./data/Kbdata";
import hlData from "./data/Hldata";
import accesssoriesData from "./data/Accessoriesdata";

const myContext = createContext()


export default function Conpro(props) {

    const [mensdata, setMensdata] = useState(mensData)
    const [trenddata, setTrenddata] = useState(trendData)
    const [kgdata, setKgdata] = useState(kgData)
    const [kbdata, setKbdata] = useState(kbData)
    const [hldata, setHldata] = useState(hlData)
    const [acsdata,setAcsdata] = useState(accesssoriesData)



    return (
        <myContext.Provider value={{
            mensdata, trenddata, kgdata, kbdata, hldata , acsdata
        }} >
            {props.children}
        </myContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(myContext)
}
