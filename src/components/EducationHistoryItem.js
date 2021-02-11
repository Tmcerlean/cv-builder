import React from 'react';
import '../styles/EducationHistoryItem.css'

const EducationHistoryItem = (props) => {

    const parseDate = (date) => {
        let newDate = new Date(date);
        let month = newDate.toLocaleString('default', { month: 'long' }).toUpperCase()
        let year = newDate.getFullYear()
        return `${month} ${year}`
    }

    return (
        props.educationList.map((education, index) => {
            return (
                <div className="employment-item">
                    <p className="employment-role">{education.degree}, {education.school}</p>
                    <p className="employment-dates">{parseDate(education.startStudy)} — {parseDate(education.endStudy)}</p>
                    <p>{education.studyDescription}</p>
                    <i class="far fa-trash-alt bin" onClick={() => props.deleteTask(index)}></i>
                    <i class="far fa-edit edit" onClick={() => props.editTask(education, index)}></i>
                </div>
        )})
    );
};

export default EducationHistoryItem;