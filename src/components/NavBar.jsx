import ReactLogo from "../assets/react.svg"

export default function NavBar(){
    return (
        <header>
            <nav>
                <img src={ReactLogo} alt="react-logo" width="40px"/>
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}