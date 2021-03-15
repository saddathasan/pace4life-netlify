import Markdown from "markdown-to-jsx";
import { MarkdownContentWrapper } from "./styled";

export default function MarkdownContent(props) {
  return (
    <MarkdownContentWrapper fontPreference={props.fontPreference}>
      <div className="markdown-body">
        <Markdown>{props.children}</Markdown>
      </div>
    </MarkdownContentWrapper>
  );
}
