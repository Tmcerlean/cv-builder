import React from 'react';
import '../styles/WorkSection.css';
import EmploymentHistoryItem from './EmploymentHistoryItem';

class WorkSection extends React.Component {

    state = {  
        role: '',
        company: '',
        startEmployment: '',
        endEmployment: '',
        jobDescription: '',
        employmentList: [],
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
            employmentList: this.state.employmentList.concat({
                role: this.state.role,
                company: this.state.company,
                startEmployment: this.state.startEmployment,
                endEmployment: this.state.endEmployment,
                jobDescription: this.state.jobDescription
            }),
            role: '',
            company: '',
            startEmployment: '',
            endEmployment: '',
            jobDescription: '',
            showForm: !this.state.showForm
        })
    }

    deleteTask = (index) => {

        let newEmploymentList = this.state.employmentList;
        newEmploymentList.splice(index, 1)

        this.setState({
            employmentList: newEmploymentList,
        })
    }

    editTask = (employment, index) => {

        let newEmploymentList = this.state.employmentList;
        newEmploymentList.splice(index, 1)

        this.setState({
            role: employment.role,
            company: employment.company,
            startEmployment: employment.startEmployment,
            endEmployment: employment.endEmployment,
            jobDescription: employment.jobDescription,
            employmentList: newEmploymentList,
        })
    }

    render() {
        return (
            <div className="work-section">
                <h2 className="section-header">Employment History</h2>
                <form className="section-form" onSubmit={this.handleSubmit}>
                    <div className="two-fields">
                        <div className="field">
                            <label className="field-label">Job Title</label>
                            <input
                                name="role" 
                                className="half-width-input" 
                                onChange={this.handleChange}
                                value={this.state.role}>
                            </input>
                        </div>
                        <div className="field">
                            <label className="field-label">Employer</label>
                            <input 
                                name="company"
                                className="half-width-input" 
                                onChange={this.handleChange}
                                value={this.state.company}>
                            </input>
                        </div>
                    </div>
                    <div className="two-fields">
                        <div className="field">
                            <label className="field-label">Start Date</label>
                            <input 
                                name="startEmployment"
                                className="half-width-input"
                                type="date"
                                onChange={this.handleChange}
                                value={this.state.startEmployment}>   
                            </input>
                        </div>
                        <div className="field">
                            <label className="field-label">End Date</label>
                            <input 
                                name="endEmployment"
                                className="half-width-input"
                                type="date"
                                onChange={this.handleChange}
                                value={this.state.endEmployment}> 
                            </input>
                        </div>
                    </div>
                    <div className="description-field">
                        <label className="field-label">Description</label>
                        <textarea 
                            name="jobDescription"
                            className="textarea-input"
                            type="date"
                            onChange={this.handleChange}
                            value={this.state.jobDescription}>   
                        </textarea>
                    </div>
                    <div onClick={this.handleSubmit} className="add-div">+ Add Employment</div>
                </form>
                <EmploymentHistoryItem employmentList={this.state.employmentList} deleteTask={this.deleteTask} editTask={this.editTask}/>
            </div>
        )};
};

export default WorkSection;