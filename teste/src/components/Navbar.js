import react from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop">
                    My shopping
                </span>
                <div className="cart">
                    <span>
                        <i className='fas fa-cart-plus'></i>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;