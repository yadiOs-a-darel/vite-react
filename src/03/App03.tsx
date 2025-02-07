import Student from "../02/Student"


const ListCountries = [
    {
        name : 'RCA',
        capital: 'Bangui',
        flag: 'bleu,blanc,vert,jaune,rouge',
        population: 'centrafricaine'

    },
    {
        name : 'Senegal',
        capital: 'dakar',
        flag: 'vert.jaune,rouge',
        population: 'senegalaise'

    },
    {
        name : 'Gabon',
        capital: 'libreville',
        flag: 'vert,jaune,bleu',
        population: 'gabonaiise'

    }
]

export default function App2() {
    const features = ListCountries.map(function (e,index) {
        return(
            <Student key={index} 
            name={e.name}
            capital={e.capital}
            flag ={e.flag}
            population = {e.population}/>
        )
    });

    return(
        <div>
            <h1>features</h1>
            {features}
        </div>
    )
    
}