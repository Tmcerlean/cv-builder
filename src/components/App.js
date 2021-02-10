import React from 'react';
import '../styles/App.css'
import EducationSection from './EducationSection';
import PersonalSection from './PersonalSection';
import WorkSection from './WorkSection';

class App extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',   
        phoneNumber: ''
    }

    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className='main-container'>
                <div className='cv-container'>
                    <PersonalSection handleChange={this.handleChange}/>
                    <WorkSection handleChange={this.handleChange}/>
                    <EducationSection handleChange={this.handleChange}/>
                </div>
            </div>
        )
    };
}

export default App;