import { createContext } from "react";
import Father from "../Father/Father";

export const GranSonName = createContext('abc')

const Grandpa = () => {
    return (
        <div>
            <h2>Grandpa</h2>
            <GranSonName.Provider value="ulta palta">
                <Father></Father>
            </GranSonName.Provider>
        </div>
    );
};

export default Grandpa;