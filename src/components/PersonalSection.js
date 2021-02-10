import React from 'react';
import '../styles/PersonalSection.css'

class PersonalSection extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        professionalSummary: '',
        showForm: true
    }

    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
        });
        console.log(this.state);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ showForm: !this.state.showForm })
        // DO STUFF

        // Set state - hideForm = true
        // If hide form is true, then return different item (Details + Edit Button + Delete Button) via ternary
    }

    render(props) {
        return (
            <div className="personal-section">
                <h2 className="section-header">Personal Details</h2>
                {
                    (this.state.showForm)
                        ? <form className="section-form" onSubmit={this.handleSubmit}>
                            <div className="two-fields">
                                <div className="field">
                                    <label className="field-label">First Name</label>
                                    <input
                                        name="firstName" 
                                        className="half-width-input" 
                                        onChange={this.handleChange} 
                                        value={this.state.firstName}>
                                    </input>
                                </div>
                                <div className="field">
                                    <label className="field-label">Last Name</label>
                                    <input 
                                        name="lastName"
                                        className="half-width-input" 
                                        onChange={this.handleChange} 
                                        value={this.state.lastName}>
                                    </input>
                                </div>
                            </div>
                            <div className="two-fields">
                                <div className="field">
                                    <label className="field-label">Email</label>
                                    <input 
                                        name="emailAddress"
                                        className="half-width-input"
                                        onChange={this.handleChange} 
                                        value={this.state.emailAddress}>   
                                    </input>
                                </div>
                                <div className="field">
                                    <label className="field-label">Phone</label>
                                    <input 
                                        name="phoneNumber"
                                        className="half-width-input"
                                        onChange={this.handleChange} 
                                        value={this.state.phoneNumber}> 
                                    </input>
                                </div>
                            </div>
                            <div className="description-field">
                                <label className="field-label">Professional Summary</label>
                                <textarea 
                                    name="professionalSummary"
                                    className="textarea-input"
                                    type="date"
                                    onChange={this.handleChange}>   
                                </textarea>
                            </div>
                        </form>
                        : <div>
                            <div> 
                                {`Name: ${this.state.firstName} ${this.state.lastName}`}
                            </div>
                            <div> 
                                {`Email: ${this.state.emailAddress}`}
                            </div> 
                            <div> 
                                {`Phone: ${this.state.phoneNumber}`}
                            </div> 
                        </div>
                }
            </div>
        );
    };
};

export default PersonalSection;