import React from 'react'
import CustomHooks from './CustomHooks';

export default function CustomHooksImplementatin() {

    // https://jsonplaceholder.typicode.com/users
    // https://jsonplaceholder.typicode.com/posts/1/comments
    const url = 'https://jsonplaceholder.typicode.com/users';
    const {data} = CustomHooks(url);

    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(
                        (user, i) => (
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </React.Fragment>
    )
}
