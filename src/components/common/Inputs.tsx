interface PropsType {
    placeholder: string;
    type?: string;
}

export const Input285 = ({placeholder, type}: PropsType) => {
    return <input type={type ? type : "text"} placeholder={placeholder} className={'size285'}/>
}