import React, {useState} from 'react';
import '../styles/EducationSection.css'
import EducationHistoryItem from './EducationHistoryItem';

const EducationSection = () => {

    const [state, setState] = useState({
        school: '',
        degree: '',
        startStudy: '',
        endStudy: '',
        studyDescription: '',
        educationList: [],
        showForm: true
    });

    const handleChange = (e) => {
		setState({
            ...state, 
            [e.target.name]: e.target.value
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setState({
            ...state,
            educationList: state.educationList.concat({
                school: state.school,
                degree: state.degree,
                startStudy: state.startStudy,
                endStudy: state.endStudy,
                studyDescription: state.studyDescription
            }),
            school: '',
            degree: '',
            startStudy: '',
            endStudy: '',
            studyDescription: '',
            showForm: !state.showForm
        })
    }

    const deleteTask = (index) => {

        let newEducationList = state.educationList;
        newEducationList.splice(index, 1)

        setState({
            ...state,
            educationList: newEducationList,
        })
    }

    const editTask = (education, index) => {

        let newEducationList = state.educationList;
        newEducationList.splice(index, 1)

        setState({
            ...state,
            school: education.school,
            degree: education.degree,
            startStudy: education.startStudy,
            endStudy: education.endStudy,
            studyDescription: education.studyDescription,
            educationList: newEducationList,
        })
    }

    return (
        <div className="education-section">
            <h2 className="section-header">Education</h2>
            <form className="section-form" onSubmit={handleSubmit}>
                <div className="two-fields">
                    <div className="field">
                        <label className="field-label">School</label>
                        <input
                            name="school" 
                            className="half-width-input" 
                            onChange={handleChange}
                            value={state.school}>
                        </input>
                    </div>
                    <div className="field">
                        <label className="field-label">Degree</label>
                        <input 
                            name="degree"
                            className="half-width-input" 
                            onChange={handleChange}
                            value={state.degree}>
                        </input>
                    </div>
                </div>
                <div className="two-fields">
                    <div className="field">
                        <label className="field-label">Start Date</label>
                        <input 
                            name="startStudy"
                            className="half-width-input"
                            type="date"
                            onChange={handleChange}
                            value={state.startStudy}>   
                        </input>
                    </div>
                    <div className="field">
                        <label className="field-label">End Date</label>
                        <input 
                            name="endStudy"
                            className="half-width-input"
                            type="date"
                            onChange={handleChange}
                            value={state.endStudy}> 
                        </input>
                    </div>
                </div>
                <div className="description-field">
                    <label className="field-label">Description</label>
                    <textarea 
                        name="studyDescription"
                        className="textarea-input"
                        type="date"
                        onChange={handleChange}
                        value={state.studyDescription}>   
                    </textarea>
                </div>
                <div onClick={handleSubmit} className="add-div">+ Add Education</div>
            </form>
            <EducationHistoryItem educationList={state.educationList} deleteTask={deleteTask} editTask={editTask}/>
        </div>
    );
};

export default EducationSection;