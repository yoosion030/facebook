import * as S from './style';

interface ContentProps {
  content: string;
  contentImage: string;
}

const Content = ({ content, contentImage }: ContentProps) => {
  return (
    <>
      <S.ContentSection>{content}</S.ContentSection>
      <img src={contentImage} />
    </>
  );
};

export default Content;
