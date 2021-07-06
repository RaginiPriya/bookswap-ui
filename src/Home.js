import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Background from "./book_Heaven.jpg"
import "./Home.css"

class Home extends Component {


    render() {
        const myStyle= {
            backgroundImage: "url(" + Background + ")" , 
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white"
        }
        return(
            <div className="style1" >
                {/* This is the first page user will see. Add images, words about how we can swap */}
                
                <h1 style = {{color: "white"}}>This is book swapping heaven!!</h1>
                
                <div style = {{color: "white" , position: "center"}}><em><b>
                    <p>You have a book which you have already read and want to own some other book?
                        Are you worried that you spend a lot of money on buying books and are trying to be on a book budget? </p>
                    <p>This is the perfect place for you. No need for cash transactions just old fashioned barter system.</p>
                    <p>Bonus: You get to know your neighbour's taste in books and then can judge him appropriately </p>
                </b></em></div>    
            </div>
        )
    }
}
export default Home