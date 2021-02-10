import React from 'react';
import '../styles/EducationSection.css'
import EducationHistoryItem from './EducationHistoryItem';

class EducationSection extends React.Component {

    state = {
        school: '',
        degree: '',
        startStudy: '',
        endStudy: '',
        studyDescription: '',
        educationList: [],
        showForm: true
    }

    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            educationList: this.state.educationList.concat({
                school: this.state.school,
                degree: this.state.degree,
                startStudy: this.state.startStudy,
                endStudy: this.state.endStudy,
                studyDescription: this.state.studyDescription
            }),
            school: '',
            degree: '',
            startStudy: '',
            endStudy: '',
            studyDescription: '',
            showForm: !this.state.showForm
        })
    }

    deleteTask = (index) => {

        let newEducationList = this.state.educationList;
        newEducationList.splice(index, 1)

        this.setState({
            educationList: newEducationList,
        })
    }

    editTask = (education, index) => {

        let newEducationList = this.state.educationList;
        newEducationList.splice(index, 1)

        this.setState({
            school: education.school,
            degree: education.degree,
            startStudy: education.startStudy,
            endStudy: education.endStudy,
            studyDescription: education.studyDescription,
            educationList: newEducationList,
        })
    }

    render() {
        return (
            <div className="education-section">
                <h2 className="section-header">Education</h2>
                <form className="section-form" onSubmit={this.handleSubmit}>
                    <div className="two-fields">
                        <div className="field">
                            <label className="field-label">School</label>
                            <input
                                name="school" 
                                className="half-width-input" 
                                onChange={this.handleChange}
                                value={this.state.school}>
                            </input>
                        </div>
                        <div className="field">
                            <label className="field-label">Degree</label>
                            <input 
                                name="degree"
                                className="half-width-input" 
                                onChange={this.handleChange}
                                value={this.state.degree}>
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
                                onChange={this.handleChange}
                                value={this.state.startStudy}>   
                            </input>
                        </div>
                        <div className="field">
                            <label className="field-label">End Date</label>
                            <input 
                                name="endStudy"
                                className="half-width-input"
                                type="date"
                                onChange={this.handleChange}
                                value={this.state.endStudy}> 
                            </input>
                        </div>
                    </div>
                    <div className="description-field">
                        <label className="field-label">Description</label>
                        <textarea 
                            name="studyDescription"
                            className="textarea-input"
                            type="date"
                            onChange={this.handleChange}
                            value={this.state.studyDescription}>   
                        </textarea>
                    </div>
                    <div onClick={this.handleSubmit} className="add-div">+ Add Education</div>
                </form>
                <EducationHistoryItem educationList={this.state.educationList} deleteTask={this.deleteTask} editTask={this.editTask}/>
            </div>
        )};
};

export default EducationSection;