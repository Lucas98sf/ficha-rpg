import { mudarValorPericia, renderD20 } from "../utils";

export default function Expertises({ Nome, Perícias }) {
    return (
        <div className="pericias">
            {Object.entries(Perícias).map(([type, pericias]) => {
                const values = Object.entries(pericias).map(([name, value]) => {
                    return (
                        <div key={name} className="periciaNameValue">
                            <button
                                className="periciaName"
                                id={`${name}Button`}
                                onClick={()=> renderD20(name)}
                            >
                                {name}
                            </button>
                            <div className="buttonsGroup" id={`${name}Buttons`}>
                                <button
                                    className="up"
                                    id={`${name}Up`}
                                    onClick={() =>
                                        mudarValorPericia(
                                            `${name}Up`,
                                            Nome,
                                            type,
                                            name,
                                            +1
                                        )
                                    }
                                >
                                    +
                                </button>
                                <button className="periciaValue" id={`${name}`}>
                                    {value}
                                </button>
                                <button
                                    className="down"
                                    id={`${name}Down`}
                                    onClick={() =>
                                        mudarValorPericia(
                                            `${name}Up`,
                                            Nome,
                                            type,
                                            name,
                                            -1
                                        )
                                    }
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    );
                });
                return (
                    <div key={type} className="periciaType" id={`${type}`}>
                        {type}
                        <br />
                        {values}
                    </div>
                );
            })}
        </div>
    );
}
