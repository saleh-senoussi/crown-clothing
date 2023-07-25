import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { LogoContainer, NavLink, NavLinks, NavigationContainer } from './navigation.styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart());

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer className='logo-container' to='/'>
                    <CrownLogo className='logo'/>
                </LogoContainer>
                <NavLinks>
                    <NavLink className='nav-link' to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser 
                            ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                            : (<NavLink to='/auth'>
                                SIGN IN
                            </NavLink>)
                    }
                    
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;