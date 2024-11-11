import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <h1>Headerzinho do app de filme Bem-Vindo</h1>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/movies"}>Filmes</Link>
                </li>
                
            </ul>
        </>
    )
}