import Capitale from "./Capitale";
import Hello from "./Hello";



export default function App02() {

    return (
        <div>
            <h1>Capitales</h1>
            <Capitale pays="RCA" ville="Bangui" />
        
            <h1>Hello</h1>
            <Hello lang="en" name="Ady" />
        </div>
    )
}