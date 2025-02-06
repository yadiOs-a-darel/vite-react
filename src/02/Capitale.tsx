

interface AppProps {
    pays: string
    ville: string
}

export default function Capitale(props:AppProps) {

    return (
        <div>
           la capitale de <strong>{props.pays}</strong> est <strong>{props.ville}</strong>
        </div>
    )
}