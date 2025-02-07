import Capitale from "./Capitale";
import Hello from "./Hello";
import Student from "./Student";



export default function App02() {

    return (
        <div>
            <h1>Capitales</h1>
            <Capitale pays="RCA" ville="Bangui" />

            <h1>Hello</h1>
            <Hello lang="en" name="Ady" />

            <h1>Etudiant</h1>
            <Student name="RCA" age={12} phoneNumber="72847859" />
           
        </div>
    )
}