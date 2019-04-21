import React, {Component} from 'react';
import './styles/_landing.scss';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1 className="landing__title title-one">Welcome!</h1>
        <p className="landing__text text">
          It is a simplest ToDo list!
        </p>
        <h2 className="landing__subtitle title">You can there:</h2>
        <ul className="landing__list">
          <li className="landing__list-item">Register and login</li>
          <li className="landing__list-item">Create, update and remove own projects</li>
          <li className="landing__list-item">Create, update and delete tasks</li>
        </ul>
        <h2 className="landing__subtitle title">The app created with:</h2>
        <ul className="landing__list">
          <li className="landing__list-item">Node.js(Express.js)</li>
          <li className="landing__list-item">MySQL(Sequelize for models and connection with DB)</li>
          <li className="landing__list-item">JSON Web Token(for authorization)</li>
          <li className="landing__list-item">React(built with Create React App)</li>
          <li className="landing__list-item">SASS(for flexible work with CSS)</li>
          <li className="landing__list-item">Axios(for cross browser queries on server)</li>
          <li className="landing__list-item">Eslint and Stylelint(for linting code)</li>
          <li className="landing__list-item">Heroku with ClearDB</li>
        </ul>
      </div>
    )
  }
}

export default Landing;
