export function Section({ children, sectionName, activeSection, callback }) {

    const changeSection = () => {
        const setActiveSection = sectionName === activeSection ? null : sectionName;
        callback(setActiveSection);
    }
    return (
        <div className={`${sectionName == activeSection ? 'selected' : ''}`} onClick={() => changeSection()}>
            {children}
        </div>
    )
}