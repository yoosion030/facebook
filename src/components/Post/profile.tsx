import styled from '@emotion/styled';

const Profile = () => {
  return (
    <ProtileSection>
      <img src='https://image.rocketpunch.com/company/174836/2pmlab_logo_1658207689.png?s=40x40&t=inside' />
      <div>
        <Name>오후두시랩</Name>
        <Date>4월 3일 오전 12:36 </Date>
      </div>
    </ProtileSection>
  );
};

export default Profile;

const ProtileSection = styled.section`
  display: flex;
  gap: 10px;
  padding: 12px 16px 0;
  height: 40px;
  box-sizing: content-box;
`;

const Name = styled.h3`
  font-weight: 900;
  color: #050505;
  font-size: 15px;
  margin: 5px 0;
`;

const Date = styled.p`
  display: block;
  color: #65676b;
  font-size: 13px;
  margin-top: auto;
`;
