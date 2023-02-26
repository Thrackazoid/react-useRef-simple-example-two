import React from "react"
import {ThemeContext} from "./themeContext"

function Button(props) {
    const context = React.useContext(ThemeContext)
    return (
        <ThemeContext.Consumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContext.Consumer>
    )    
}

export default Button
