import Link from "next/link";

import {
  DesktopNavLinkList,
  DesktopNavLinkAnchor,
  BasketIcon,
  CartCountDesktop,
} from "./styled";

const DesktopNav = (props) => {
  function logoutUserDesktop(event) {
    event.preventDefault();
    props.logoutUser();
  }

  const loginOrLogout = props.userExists ? (
    <>
      <li>
        <Link href="/account">
          <DesktopNavLinkAnchor>account</DesktopNavLinkAnchor>
        </Link>
      </li>
      <li>
        <DesktopNavLinkAnchor onClick={logoutUserDesktop}>
          logout
        </DesktopNavLinkAnchor>
      </li>
    </>
  ) : (
    <li>
      <Link href="/login">
        <DesktopNavLinkAnchor>login</DesktopNavLinkAnchor>
      </Link>
    </li>
  );

  return (
    <DesktopNavLinkList>
      <li>
        <Link href="/shop">
          <DesktopNavLinkAnchor>shop</DesktopNavLinkAnchor>
        </Link>
      </li>

      <li>
        <Link href="/about">
          <DesktopNavLinkAnchor>about</DesktopNavLinkAnchor>
        </Link>
      </li>

      <li>
        <Link href="/khub">
          <DesktopNavLinkAnchor>knowledge center</DesktopNavLinkAnchor>
        </Link>
      </li>

      <li>
        <Link href="/blog">
          <DesktopNavLinkAnchor>blog</DesktopNavLinkAnchor>
        </Link>
      </li>

      <li>
        <Link href="/test-results">
          <DesktopNavLinkAnchor>results</DesktopNavLinkAnchor>
        </Link>
      </li>

      {loginOrLogout}

      <BasketIcon>
        <img
          onClick={props.openBasket}
          src="/assets/icons/icon-basket.png"
          alt="basket icon"
        />
        <CartCountDesktop onClick={props.openBasket}>
          {props.itemQuantity}
        </CartCountDesktop>
      </BasketIcon>
    </DesktopNavLinkList>
  );
};

export default DesktopNav;
