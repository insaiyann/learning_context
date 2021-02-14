import React, { createContext,Component } from 'react';

export const ThemeContext = createContext();


//a context provider always needs to be created with any context that we create because this provides the context to the chosen components
class ThemeContextProvider extends Component {
    state = {               //this is the data that we want to share with our components
        isLightTheme: true,
        light: { syntax: "#555", ui: '#ddd', bg: '#eee' },
        dark:{syntax:'#ddd',ui:'#333',bg:'#555'}
    }
    themeToggle = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }
    
    render() { 
        /*the CONTEXT_NAME.PROVIDER element is the real stuff that does the job of sharing the data of the context,
        the value property represents whatever data that we want to provide to the components*/
        return (<ThemeContext.Provider value={{...this.state,themeToggle:this.themeToggle}}>
            {this.props.children}
        </ThemeContext.Provider>);
    }
}
 
export default ThemeContextProvider;
