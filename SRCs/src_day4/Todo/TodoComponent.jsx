import React from 'react'

class TodoComponent extends React.Component{
    constructor() {
        super();
        //Default data for component...
        this.state = {
            todo: ['Wake up at 6 am.', 'Do gym', 'Bath']
        };
    }
// not working method...this is not correct way to add data directly...
    AddTodo = () => {
        this.state.todo.push('Virtusa(9am - 12pm)');
        this.state.todo.push('NSEC(1.30pm - 5.30pm)');
        this.state.todo.push('Angular(6.30pm - 8.30pm)');
        this.state.todo.push('Java(9.30pm - 10.30pm)');
    }
// working method...
    AddTodo2 = () => {
        let newTodo = [...this.state.todo];

        newTodo.push('Virtusa(9am - 12pm)');
        newTodo.push('NSEC(1.30pm - 5.30pm)');
        newTodo.push('Angular(6.30pm - 8.30pm)');
        newTodo.push('Java(9.30pm - 10.30pm)');
// setState is monitering the change and update the state ofbject...
        this.setState({todo: newTodo});
    }

    render() {
        return (
            <div>
                <h2>Today Job</h2>
                <ol>
                    {
                        this.state.todo.map((elem, index) => {
                            return (
                                <li key={index}>
                                    <h4>{elem}</h4>
                                </li>
                            );
                        })
                    }   
                </ol>
                <button type="button" onClick={this.AddTodo}>Add Todo</button>
                <button type="button" onClick={this.AddTodo2}>Add Todo2</button>
            </div>
        );
    }
}

export default  TodoComponent;
