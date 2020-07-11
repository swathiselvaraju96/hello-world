import React, { Component } from 'react';
import Person from './Person/Person';
//import './App.css';
import './Person/Person.css';

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        { name: 'lathaa', age: 14 },
        { name: 'selvaraju', age: 45 },
        { name: 'jikki', age: 4 }
      ]
    }
  }
  render() {
    return (
      <div>
        {/* <button type="submit" className="glyphicon glyphicon-search">Hai</button> */}
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
        </table>

        {
          this.state.person.map((pers, index) => {
            return <Person key={index} name={pers.name} age={pers.age}></Person>
          })
        }

      </div>
    );
  }
}





export default App1;