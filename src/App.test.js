import {render,screen} from '@testing-library/react';
import App from './App';
import user from '@testing-library/user-event';


test('can receive a new user and show it on list',async ()=>{
    render(<App/>)
    const nameInput = screen.getByRole('textbox',{
        name:/name/i
    })
    const emailInput = screen.getByRole('textbox',{
        name:/email/i
    })
    const button = screen.getByRole('button');
    user.click(nameInput);
    user.keyboard('vignan');

    user.click(emailInput);
    user.keyboard('vignan@gmail.com')

    
    user.click(button);

    // screen.debug();

        const name = await screen.findByRole('cell',{name:'vignan'});
        const email = await screen.findByRole('cell',{name:'vignan@gmail.com'});
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
})