import Searchbar from "../Searchbar/Searchbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useState } from "react";
import css from './MainMenu.module.css'

const MainMenu = () => {

  let [cartOpen, setCartOpen] = useState(false);

  return (
    <div className={css.container}>
      <a href="#" alt="logo">
        <h3 className={css.logo}>Glance</h3>
      </a>

      <Searchbar />

      <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <a href="#" alt="catalog">
              <GiHamburgerMenu size={22} className={css.navItemIcon} />
              <span>Каталог</span>
            </a>
          </li>

          <li className={css.navItem}>
            <a href="#" alt="cart">
              <FiShoppingCart
                onClick={() => setCartOpen((prevState) => !prevState)}
                size={22}
                className={`${css.navItemIcon} ${cartOpen ? css.active : ""}`}
              />

              {cartOpen && (
                <div className={css.shopCart}>
                  
                </div>
              )}

              <span>Корзина</span>
            </a>
          </li>
          <li className={css.navItem}>
            <a href="#" alt="profile">
              <FiUser size={22} className={css.navItemIcon} />
              <span>Профиль</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
