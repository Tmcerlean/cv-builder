import React, {useState} from 'react';
import '../styles/PersonalSection.css'

const PersonalSection = () => {

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        professionalSummary: '',
        showForm: true
    });

    const handleChange = (e) => {
		setState({
            ...state, 
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="personal-section">
            <h2 className="section-header">Personal Details</h2>
            {
                (state.showForm)
                    ? <form className="section-form">
                        <div className="two-fields">
                            <div className="field">
                                <label className="field-label">First Name</label>
                                <input
                                    name="firstName" 
                                    className="half-width-input" 
                                    onChange={handleChange} 
                                    value={state.firstName}>
                                </input>
                            </div>
                            <div className="field">
                                <label className="field-label">Last Name</label>
                                <input 
                                    name="lastName"
                                    className="half-width-input" 
                                    onChange={handleChange} 
                                    value={state.lastName}>
                                </input>
                            </div>
                        </div>
                        <div className="two-fields">
                            <div className="field">
                                <label className="field-label">Email</label>
                                <input 
                                    name="emailAddress"
                                    className="half-width-input"
                                    onChange={handleChange} 
                                    value={state.emailAddress}>   
                                </input>
                            </div>
                            <div className="field">
                                <label className="field-label">Phone</label>
                                <input 
                                    name="phoneNumber"
                                    className="half-width-input"
                                    onChange={handleChange} 
                                    value={state.phoneNumber}> 
                                </input>
                            </div>
                        </div>
                        <div className="description-field">
                            <label className="field-label">Professional Summary</label>
                            <textarea 
                                name="professionalSummary"
                                className="textarea-input"
                                type="date"
                                onChange={handleChange}>   
                            </textarea>
                        </div>
                    </form>
                    : <div>
                        <div> 
                            {`Name: ${state.firstName} ${state.lastName}`}
                        </div>
                        <div> 
                            {`Email: ${state.emailAddress}`}
                        </div> 
                        <div> 
                            {`Phone: ${state.phoneNumber}`}
                        </div> 
                    </div>
            }
        </div>
    );
};

export default PersonalSection;