import { createContext, useState, useEffect, useContext } from "react"
import { createBrowserHistory } from "history";
const ChatContext = createContext()


const history = createBrowserHistory();

const ChatProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo)

        if (!userInfo) {
            history.push("/loginpage");
        }
    },[history])
    return (
        <ChatContext.Provider value={{user,setUser}}>
            {children}
        </ChatContext.Provider>
    )
}

export const ChatState = () => {
    return useContext(ChatContext);
}


export default ChatProvider