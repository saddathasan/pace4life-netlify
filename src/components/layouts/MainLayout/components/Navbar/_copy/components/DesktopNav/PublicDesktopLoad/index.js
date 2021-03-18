import Link from "next/link";

import { DesktopNavLinkList, DesktopNavLinkAnchor } from "../styled";

const PublicDesktopLoad = () => {
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
    </DesktopNavLinkList>
  );
};
export default PublicDesktopLoad;
