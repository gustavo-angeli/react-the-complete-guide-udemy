export function TabButton1(props) {
    return (
        <li>
            <button className={props.isSelected ? 'active' : undefined} onClick={props.onSelect}>{props.children}</button>
        </li>
    )
}

export function TabButton2({children, isSelected, ...props}) {
    
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    )
}