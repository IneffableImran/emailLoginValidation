import React, { Component } from 'react';
import './style.css';
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [{
                id: 1,
                name: "test1",
                age: "11",
                gender: "male",
                email: "test1@gmail.com",
                phoneNo: "9415346313"
            },
            {
                id: 2,
                name: "test2",
                age: "12",
                gender: "male",
                email: "test2@gmail.com",
                phoneNo: "9415346314"
            },
            {
                id: 3,
                name: "test3",
                age: "13",
                gender: "male",
                email: "test3@gmail.com",
                phoneNo: "9415346315"
            },
            {
                id: 4,
                name: "test4",
                age: "14",
                gender: "male",
                email: "test4@gmail.com",
                phoneNo: "9415346316"
            },
            {
                id: 5,
                name: "test5",
                age: "15",
                gender: "male",
                email: "test5@gmail.com",
                phoneNo: "9415346317"
            },
            {
                id: 6,
                name: "test6",
                age: "16",
                gender: "male",
                email: "test6@gmail.com",
                phoneNo: "9415346318"
            }
            ]
        };

    }

    render() {

        var { user } = this.state;
        return (
            <div>

                <div className="App">
                    <div>
                        <header className="App-header">
                            <h1 >Dashboard</h1>
                        </header>
                    </div>
                </div>

                <div className="main-container">
                    <div className="container">

                        <table className="table">
                            {user && user.length && user.map((user) => (
                                <tr>
                                    <td>
                                        <li>id: {user.id}</li>
                                        <li>name: {user.name}</li>
                                        <li>age: {user.age}</li>
                                        <li>gender: {user.gender}</li>
                                        <li>email: {user.email}</li>
                                        <li>phoneNo: {user.phoneNo}</li>
                                    </td>
                                </tr>

                            ))}
                        </table>

                    </div>
                </div>
            </div>

        );
    }
}

export default Dashboard;