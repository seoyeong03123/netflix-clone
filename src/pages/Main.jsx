import React from "react";
import Banner from  "../components/Banner"
import Preview from "../components/Preview"
import MovieContainer from "../components/MovieContainer"

class Main extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{marginTop:"50%"}}>
                <Banner />
                <Preview />
                <MovieContainer />
            </div>
        )
    }

}

export default Main;


// git add .
// git commit -m"first init"
// git remote add origin ~
// git push origin master
