import {render,screen,waitFor} from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button',()=>{
    //render the component
    render(<UserForm/>)

    //Manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    //Assertion 
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});


test('it calls onUserAdd when form is submitted',()=>{
    const mock = jest.fn();
   
    render(<UserForm onUserAdd={mock}/>)
    const nameInput = screen.getByRole('textbox',{
        name:/name/i
    })
    const emailInput = screen.getByRole('textbox',{
        name:/email/i
    })
    user.click(nameInput);
    user.keyboard('vignan');

    user.click(emailInput);
    user.keyboard('vignan@gmail.com')

    const button = screen.getByRole('button');
    user.click(button);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name:'vignan',email:'vignan@gmail.com'})
})

test('empties the two inputs when form is submitted', async() => {
    render(<UserForm onUserAdd={() => {}} />);
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const button = screen.getByRole('button');

    user.type(nameInput, 'vignan');
    user.type(emailInput, 'vignan@gmail.com');
  
    user.click(button);
  
    await waitFor(() => {
        setTimeout(() => {
          expect(nameInput).toHaveValue('');
          expect(emailInput).toHaveValue('');
        }, 0);
      });
  });