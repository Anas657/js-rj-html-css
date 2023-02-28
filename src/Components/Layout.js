import "../Layout.css"
export default function Layout(props) { 
    
    
    return (
        
        <div className={"main"}>
    
            <header className={"Header"}>This is my Header</header>
            

        <div className={"content_area"}>
            <div className={"sidebar"}>This is my SideBar</div>    
            <div className={"Right_Content"}>{props.children}</div>
        </div>
            <footer>This is my footer</footer>
            
    </div>
    
    )


}