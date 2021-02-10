import React from 'react';
import '../styles/EmploymentHistoryItem.css'

class EmploymentHistoryItem extends React.Component {

    parseDate = (date) => {
        let newDate = new Date(date);
        let month = newDate.toLocaleString('default', { month: 'long' }).toUpperCase()
        let year = newDate.getFullYear()
        return `${month} ${year}`
    }

    render(props) {
        return (
            this.props.employmentList.map((employment, index) => {
                return (
                    <div className="employment-item">
                        <p className="employment-role">{employment.role}, {employment.company}</p>
                        <p className="employment-dates">{this.parseDate(employment.startEmployment)} — {this.parseDate(employment.endEmployment)}</p>
                        <p>{employment.jobDescription}</p>
                        <i class="far fa-trash-alt bin" onClick={() => this.props.deleteTask(index)}></i>
                        <i class="far fa-edit edit" onClick={() => this.props.editTask(employment, index)}></i>
                    </div>
            )})
        );
    };
};

export default EmploymentHistoryItem;