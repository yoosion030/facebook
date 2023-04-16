import styled from '@emotion/styled';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const ContentSection = styled.section`
  padding: 12px 16px;
  font-size: 15px;
  color: #050505;
  line-height: 1.3;
  white-space: pre-wrap;
`;

export const PostLayout = styled.div`
  width: 680px;
  margin-bottom: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.17);
`;

export const ProtileSection = styled.section`
  display: flex;
  gap: 10px;
  height: 40px;
  padding: 12px 16px 0;
  box-sizing: content-box;
`;

export const Name = styled.h3`
  margin: 5px 0;
  font-size: 15px;
  font-weight: 900;
  color: #050505;
`;

export const Date = styled.p`
  display: block;
  margin-top: auto;
  font-size: 13px;
  color: #65676b;
`;

export const SocialMediaButtonLayout = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 16px;
  border-top: 1px solid #cccccc;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 50%;
  height: 15px;
  font-size: 15px;
  color: #65676b;
  cursor: pointer;
`;

export const LikeAnimation = styled.div`
  animation: likeAnimation 0.7s;

  @keyframes likeAnimation {
    20% {
      transform: scale(1.4);
    }

    50% {
      transform: rotate(-25deg);
    }

    80% {
      transform: scale(1);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;
