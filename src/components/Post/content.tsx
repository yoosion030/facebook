import styled from '@emotion/styled';

interface ContentProps {
  content: string;
  contentImage: string;
}

const Content = ({ content, contentImage }: ContentProps) => {
  return (
    <>
      <ContentSection>{content}</ContentSection>
      <img src={contentImage} />
    </>
  );
};

export default Content;

const ContentSection = styled.section`
  padding: 12px 16px;
  font-size: 15px;
  color: #050505;
  line-height: 1.3;
`;
