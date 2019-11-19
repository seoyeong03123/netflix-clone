import React from "react";
import Banner from  "../components/Banner"

class Main extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Banner />
            </div>
        )
    }

}

export default Main;


// git add .
// git commit -m"first init"
// git remote add origin ~
// git push origin master