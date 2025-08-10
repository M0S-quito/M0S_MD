import App from "../App"

function Header() {
    return(
        <header style={
            {padding: '10px', 
            background: "pink", 
            border: '1px solid black'}}>
            
            <nav>
            <h1>M0S_MB</h1>
            <a href="/" style={{ marginRight: '8px' }}>Home</a>
            </nav>

        </header>
    )
}
export default Header