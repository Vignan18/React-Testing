import {render,screen,within} from '@testing-library/react';
import UserList from './UserList';

test('render one rows per user',()=>{
    const users = [
        {name:'a',email:"a@gmail.com"},
        {name:'b',email:"b@gmail.com"}

    ]
    render(<UserList users={users}/>)
    // screen.logTestingPlaygroundURL();
    const rows = within(screen.getByTestId('users')).getAllByRole('row');
    expect(rows).toHaveLength(2);

})

test('render the email and name of each user',()=>{

})