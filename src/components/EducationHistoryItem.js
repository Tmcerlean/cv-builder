import React from 'react';
import '../styles/EducationHistoryItem.css'

class EducationHistoryItem extends React.Component {

    parseDate = (date) => {
        let newDate = new Date(date);
        let month = newDate.toLocaleString('default', { month: 'long' }).toUpperCase()
        let year = newDate.getFullYear()
        return `${month} ${year}`
    }

    render(props) {
        return (
            this.props.educationList.map((education, index) => {
                return (
                    <div className="employment-item">
                        <p className="employment-role">{education.degree}, {education.school}</p>
                        <p className="employment-dates">{this.parseDate(education.startStudy)} — {this.parseDate(education.endStudy)}</p>
                        <p>{education.studyDescription}</p>
                        <i class="far fa-trash-alt bin" onClick={() => this.props.deleteTask(index)}></i>
                        <i class="far fa-edit edit" onClick={() => this.props.editTask(education, index)}></i>
                    </div>
            )})
        );
    };
};

export default EducationHistoryItem;