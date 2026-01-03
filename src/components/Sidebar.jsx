
export function SideBar({ children, className }) {
    return (
        <div className={`sidebar ${className}`}>
            {children}
        </div>
    )
}