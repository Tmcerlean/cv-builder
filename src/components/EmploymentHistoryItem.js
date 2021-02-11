import React from 'react';
import '../styles/EmploymentHistoryItem.css'

const EmploymentHistoryItem = (props) => {

    const parseDate = (date) => {
        let newDate = new Date(date);
        let month = newDate.toLocaleString('default', { month: 'long' }).toUpperCase()
        let year = newDate.getFullYear()
        return `${month} ${year}`
    }

    return (
        props.employmentList.map((employment, index) => {
            return (
                <div className="employment-item">
                    <p className="employment-role">{employment.role}, {employment.company}</p>
                    <p className="employment-dates">{parseDate(employment.startEmployment)} — {parseDate(employment.endEmployment)}</p>
                    <p>{employment.jobDescription}</p>
                    <i class="far fa-trash-alt bin" onClick={() => props.deleteTask(index)}></i>
                    <i class="far fa-edit edit" onClick={() => props.editTask(employment, index)}></i>
                </div>
        )})
    );
};

export default EmploymentHistoryItem;