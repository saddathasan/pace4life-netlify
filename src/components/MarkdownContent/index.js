import Markdown from "markdown-to-jsx";
import { MarkdownContentWrapper } from "./styled";

export default function MarkdownContent(props) {
  return (
    <MarkdownContentWrapper fontPreference={props.fontPreference}>
      <Markdown className="markdown-body">{props.children}</Markdown>
    </MarkdownContentWrapper>
  );
}
