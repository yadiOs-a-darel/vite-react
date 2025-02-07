
interface Props {
    name : string
    capital: string
    flag: string
    population: string
}

export default function Student(props: Props) {
    
    const { name, capital, flag,population } = props;

    return (
        <div>
            Country: <strong>{ name }</strong><br />
            capital: <strong>{capital }</strong><br />
            flag: <strong>{ flag }</strong><br />
            population: <strong>{ population }</strong><br />
            <hr />
        </div>
    )
}