import Link from "next/link";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Figure } from "@components/elements";

import LogoSvg from "app@public/assets/logo/logo";

import { showMobileNavVar } from "app@graphql/cache";

import {
  FixedWrapper,
  MobileNavFixedContainer,
  MobileLinkAnchor,
} from "./styled";

const SHOW_MOBILE_NAV = gql`
  {
    showMobileNav @client
  }
`;

const MobileNav = (props) => {
  const { data: toggle } = useQuery(SHOW_MOBILE_NAV);

  function handleToggle() {
    // client.writeData({
    //   data: {
    //     showMobileNav: false,
    //   },
    // });

    showMobileNavVar(false);
  }

  function logoutUserMobile(event) {
    event.preventDefault();
    handleToggle();
    props.logoutUser();
  }

  const loginOrLogout = props.userExists ? (
    <>
      <li>
        <Link href="/account">
          <MobileLinkAnchor onClick={handleToggle}>account</MobileLinkAnchor>
        </Link>
      </li>
      <li>
        <MobileLinkAnchor last onClick={logoutUserMobile}>
          logout
        </MobileLinkAnchor>
      </li>
    </>
  ) : (
    <li>
      <Link href="/login">
        <MobileLinkAnchor last onClick={handleToggle}>
          login
        </MobileLinkAnchor>
      </Link>
    </li>
  );

  // ==============================
  return (
    <>
      {toggle.showMobileNav && <FixedWrapper onClick={handleToggle} />}
      <MobileNavFixedContainer show={toggle.showMobileNav}>
        <button
          className="btn btn-sm btn-transparent btn-close-navPositionAbsolute"
          onClick={handleToggle}
        >
          <svg
            className="g-close-btn-svg-red g-close-btn-svg-sm css-1idynds"
            viewBox="0 0 24 24"
            focusable="false"
            role="presentation"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
            ></path>
          </svg>
        </button>
        <Figure paddingLeft="2rem" paddingBottom="3rem">
          <LogoSvg width="90" color="#6bc4a4" />
        </Figure>
        <li>
          <Link href="/shop">
            <MobileLinkAnchor onClick={handleToggle}>shop</MobileLinkAnchor>
          </Link>{" "}
        </li>
        <li>
          <Link href="/about">
            <MobileLinkAnchor onClick={handleToggle}>about</MobileLinkAnchor>
          </Link>{" "}
        </li>
        <li>
          <Link href="/khub">
            <MobileLinkAnchor onClick={handleToggle}>
              knowledge center
            </MobileLinkAnchor>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <MobileLinkAnchor onClick={handleToggle}>blog</MobileLinkAnchor>
          </Link>
        </li>
        <li>
          <Link href="/test-results">
            <MobileLinkAnchor onClick={handleToggle}>results</MobileLinkAnchor>
          </Link>{" "}
        </li>
        {loginOrLogout}
      </MobileNavFixedContainer>
    </>
  );
};

export default MobileNav;
