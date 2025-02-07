

interface App02Props {
    pays: string
    ville: string
}

export default function Capitale(props:App02Props) {

    return (
        <div>
           la capitale de <strong>{props.pays}</strong> est <strong>{props.ville}</strong>
        </div>
    )
}