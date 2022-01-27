import {
    mudarValorStat,
    mudarValorSimples,
    tooltipMouse,
    tooltipMouseOut,
} from "../utils";
import Image from "next/image";
// import TextTooltips from "./TextTooltips";

export default function Stats({ Nome, Imagem, Raça, Status, Lins, Exp }) {
    return (
        <div className="centro">
            <div className="playerNameFicha">{Nome}</div>
            {/* <img className="playerImgFicha" src={Imagem}></img> */}
            <div className="playerImgFicha">
                <Image
                    alt="Player profile picture"
                    className="playerImgFicha"
                    width={270}
                    height={270}
                    unoptimized={true}
                    src={Imagem}
                ></Image>
            </div>
            {/* <TextTooltips /> */}
            {Object.entries(Status).map(([type, stat]) => {
                const values = Object.entries(stat).map(([name, value]) => {
                    return (
                        <div key={name} className={`${name}`}>
                            <input
                                type="text"
                                className={`${name}Input`}
                                id={name}
                                maxLength="3"
                                defaultValue={value}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                onKeyUp={() => mudarValorStat(Nome, type, name)}
                            />
                        </div>
                    );
                });
                return (
                    <div key={type} className={`${type}`}>
                        <div
                            className="titleStat"
                            onMouseMove={(event) => tooltipMouse(event, type)}
                            onMouseOut={() => tooltipMouseOut(type)}
                        >
                            {type}
                        </div>
                        <div className="barraStat">/</div>
                        {values}
                    </div>
                );
            })}
            <div
                className="lins"
                onMouseMove={(event) => tooltipMouse(event, "Lins")}
                onMouseOut={() => tooltipMouseOut("Lins")}
            >
                Lins
                <input
                    type="text"
                    id="Lins"
                    maxLength="5"
                    defaultValue={Lins}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    onKeyUp={() => mudarValorSimples(Nome, "Lins")}
                />
            </div>
            <div
                className="EXP"
                onMouseMove={(event) => tooltipMouse(event, "Exp")}
                onMouseOut={() => tooltipMouseOut("Exp")}
            >
                Exp
                <input
                    type="text"
                    id="Exp"
                    maxLength="5"
                    defaultValue={Exp}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    onKeyUp={() => mudarValorSimples(Nome, "Exp")}
                />
            </div>
        </div>
    );
}
