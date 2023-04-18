import * as S from './style';

interface ContentProps {
  content: string;
  contentImage: string;
}

const Content = ({ content, contentImage }: ContentProps) => {
  return (
    <>
      <S.ContentSection>{content}</S.ContentSection>
      <img src={contentImage} width='100%' alt='' />
    </>
  );
};

export default Content;
