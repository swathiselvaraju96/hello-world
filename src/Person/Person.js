import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    render() {
const my={
    width:"100px"
}
        return (
            <div>
                <table className="table table-striped table-bordered">
                    
                    <tbody>
                        <tr className={my}>
                            <td>{this.props.name}</td>
                            <td>{this.props.age}</td>
                        </tr>

                    </tbody>


                </table>

            </div>
        );
    }
}
export default Person;