import React from 'react'
const style = {
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center"
}
const Footer = () => {
    return (
        <footer className="footer" style={style}>
            <p className="col-lg-offset-3" style={{ paddingTop: "15px" }}>created by  Kailas Walldoddi.  {"||"}  <a href="http://www.github.com/kailashw"> Github</a> {"||"} <a href="https://www.linkedin.com/in/kailashw/"> Linkedin</a> </p>
        </footer>
    )
}

export default Footer;