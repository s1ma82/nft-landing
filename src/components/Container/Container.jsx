export default ({children, className}) => {
    return (
        <div className={`container ${className}`}>{children}</div>
    )
}