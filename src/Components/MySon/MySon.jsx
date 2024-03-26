import { useContext } from "react";
import { GranSonName } from "../Grandpa/Grandpa";


const MySon = () => {
    const sonName = useContext(GranSonName)
    return (
        <div>
            <h3>My son : {sonName}</h3>
        </div>
    );
};

export default MySon;