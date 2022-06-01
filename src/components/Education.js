import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
    render() {

      const { education, addBtn, delBtn } = this.props

      if (education.length === 0) {
        return <button id={uniqid()} key={uniqid} name="education" onClick={addBtn} className='add' type='submit'>Add</button>
      } else {
        return (education.map((achievement) => {
            return (
              <form key={achievement.id} className='education-form'>
                <input type="text" id="schoolInput" placeholder="School Name" />
                <input type="text" id="schoolCityInput" placeholder="City" />
                <input type="text" id="degreeInput" placeholder="Degree Type" />
                <input type="text" id="subjectInput" placeholder="Subject" />
                <input type="text" id="degreeStartedInput" placeholder="Started" />
                <input type="text" id="degreeEndedInput" placeholder="Finished" />
                <button name="education" id={achievement.id} onClick={delBtn} className='remove' type='button'>Remove</button>
                <button name="education" onClick={addBtn} className='add' type='submit'>Add</button>
              </form>
            )
          })
        )
      }
    }
  }

export default Education