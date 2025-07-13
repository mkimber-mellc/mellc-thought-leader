import { Subtitle, BodyText, CaptionText, List, BlockContainer } from '@/mellc-ui-kit';

type ArticleBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] };

type Props = {
  content: ArticleBlock[];
};

export default function RenderArticle({ content }: Props) {
  return (
    <BlockContainer className="space-y-6">
      {content.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return block.level === 2 ? (
              <Subtitle key={i} color="textsecondary" weight="bold">
                {block.text}
              </Subtitle>
            ) : (
              <CaptionText key={i} color="textsecondary" weight="bold">
                {block.text}
              </CaptionText>
            );
          case 'paragraph':
            return (
              <BodyText key={i} color="textsecondary">
                {block.text}
              </BodyText>
            );
          case 'quote':
            return (
              <CaptionText
                key={i}
                italic
                weight="bold"
                className="border-l-4 border-emerald-600 pl-4"
                color="textwarm"
              >
                {block.text}
              </CaptionText>
            );
          case 'list':
            return (
              <List
                key={i}
                lists={block.items}
                renderItem={(list) => <CaptionText italic>{list}</CaptionText>}
              />
            );
          default:
            return null;
        }
      })}
    </BlockContainer>
  );
}
