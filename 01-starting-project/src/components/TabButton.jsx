export function TabButton1(props) {
    return (
        <li>
            <button onClick={props.onSelect}>{props.children}</button>
        </li>
    )
}

export function TabButton2({children, onSelect}) {
    
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}