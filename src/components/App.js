import React from 'react';
import '../styles/App.css'
import EducationSection from './EducationSection';
import PersonalSection from './PersonalSection';
import WorkSection from './WorkSection';

const App = () => {

    return (
        <div className='main-container'>
            <div className='cv-container'>
                <PersonalSection />
                <WorkSection />
                <EducationSection />
            </div>
        </div>
    );
}

export default App;