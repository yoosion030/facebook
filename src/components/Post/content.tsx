import styled from '@emotion/styled';

const Content = () => {
  return (
    <>
      <ContentSection>
        Tech for us and Earth 오후두시랩의 프론트엔드 개발을 함께하실 분을 모십니다. <br />
        - 기술로 따뜻한 세상을 만드는 오후두시랩 우리는 지구의 내일이 곧 내 일이라는 생각으로,
        <br />
        세상에 꼭 필요한 변화를 위해 도전합니다. <br />
        건강하고 안전한 사람들의 일상과 깨끗하고 밝은 지구 환경을 만드는 프로젝트를 개발하고
        있습니다.
        <br />
        상상만 해도 가슴 벅찬 오두랩의 기술과 서비스, 그 미래를 소개합니다.
      </ContentSection>
      <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30425%2Fpenzqjfkccurvdrb__1080_790.jpg&w=680&q=75' />
    </>
  );
};

export default Content;

export const ContentSection = styled.section`
  padding: 12px 16px;
  color: #050505;
  font-size: 15px;
  line-height: 1.3;
`;
