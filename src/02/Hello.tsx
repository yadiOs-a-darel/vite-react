
interface App02Props {
    lang?: string
    name: string
}

export default function Hello(props:App02Props) {

    if (props.lang == 'en') {

        return(
            <div>
                Welcome  <strong>{props.name}</strong>
            </div>
        )
        
    }
    return (
        <div>
            Bienvenu <strong>{props.name}</strong>
        </div>
    )
    
}