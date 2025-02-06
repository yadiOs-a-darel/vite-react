
interface Hello {
    lang?: string
    name: string
}

export default function Hello(props:Hello) {

    if (props.lang='en') {
        return (<div>Welcome <strong>{props.name}</strong></div>)
    }
    return (<div>Bienvenu <strong>{props.name}</strong></div>)
    
}