import React, {useState} from 'react';
import '../styles/WorkSection.css';
import EmploymentHistoryItem from './EmploymentHistoryItem';

const WorkSection = () => {

    const [state, setState] = useState({
        role: '',
        company: '',
        startEmployment: '',
        endEmployment: '',
        jobDescription: '',
        employmentList: [],
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
            employmentList: state.employmentList.concat({
                role: state.role,
                company: state.company,
                startEmployment: state.startEmployment,
                endEmployment: state.endEmployment,
                jobDescription: state.jobDescription
            }),
            role: '',
            company: '',
            startEmployment: '',
            endEmployment: '',
            jobDescription: '',
            showForm: !state.showForm
        })
    }

    const deleteTask = (index) => {

        let newEmploymentList = state.employmentList;
        newEmploymentList.splice(index, 1)

        setState({
            ...state,
            employmentList: newEmploymentList,
        })
    }

    const editTask = (employment, index) => {

        let newEmploymentList = state.employmentList;
        newEmploymentList.splice(index, 1)

        setState({
            ...state,
            role: employment.role,
            company: employment.company,
            startEmployment: employment.startEmployment,
            endEmployment: employment.endEmployment,
            jobDescription: employment.jobDescription,
            employmentList: newEmploymentList,
        })
    }

    return (
        <div className="work-section">
            <h2 className="section-header">Employment History</h2>
            <form className="section-form" onSubmit={handleSubmit}>
                <div className="two-fields">
                    <div className="field">
                        <label className="field-label">Job Title</label>
                        <input
                            name="role" 
                            className="half-width-input" 
                            onChange={handleChange}
                            value={state.role}>
                        </input>
                    </div>
                    <div className="field">
                        <label className="field-label">Employer</label>
                        <input 
                            name="company"
                            className="half-width-input" 
                            onChange={handleChange}
                            value={state.company}>
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
                            onChange={handleChange}
                            value={state.startEmployment}>   
                        </input>
                    </div>
                    <div className="field">
                        <label className="field-label">End Date</label>
                        <input 
                            name="endEmployment"
                            className="half-width-input"
                            type="date"
                            onChange={handleChange}
                            value={state.endEmployment}> 
                        </input>
                    </div>
                </div>
                <div className="description-field">
                    <label className="field-label">Description</label>
                    <textarea 
                        name="jobDescription"
                        className="textarea-input"
                        type="date"
                        onChange={handleChange}
                        value={state.jobDescription}>   
                    </textarea>
                </div>
                <div onClick={handleSubmit} className="add-div">+ Add Employment</div>
            </form>
            <EmploymentHistoryItem employmentList={state.employmentList} deleteTask={deleteTask} editTask={editTask}/>
        </div>
    )
};

export default WorkSection;