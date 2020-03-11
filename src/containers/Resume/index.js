import React from 'react'
import Introduction from '../../components/Body/Intro';
import Jobs from '../../components/Jobs';
import Education from '../../components/Body/education';
import Skills from '../../components/Body/skills';

class Resume extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:false,
            resume: []
        }
    }

    componentDidMount(){
        this.getResume();
    }
    getResume(){

      // connecting to the API Airtable
        const url = "https://api.airtable.com/v0/apppeCVasY4oWlGwd/Table%201?api_key=keyAjdpmdZfeQf906";
        fetch(url)
            .then(response => response.json())
            .then(responseData =>{
                console.log('my data', responseData);
                const resume = responseData.records;
                this.setState({resume}, ()=>{

                });
            })
    }

    render(){
        return(
            <div>
                <Introduction/>
                <Skills />
                <Jobs jobs={this.state.resume} />
                <Education />
            </div>
        )
    }
}


export default Resume;
