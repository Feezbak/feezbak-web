import { LinkItem, LinksWrapper } from "./styles";

type LinkDataType = {
  title: string;
  url: string;
};
interface Props {
  links: LinkDataType[];
}
const Links = ({ links }: Props) => {
  return (
    <LinksWrapper>
      {links.map((linkData) => (
        <LinkItem
          end
          key={linkData.title}
          to={linkData.url}
          title={linkData.title}
        >
          {linkData.title}
        </LinkItem>
      ))}
    </LinksWrapper>
  );
};

export default Links;
