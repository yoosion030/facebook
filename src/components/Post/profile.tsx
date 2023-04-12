import styled from '@emotion/styled';

interface ProfileProps {
  profileImage: string;
  name: string;
  createdAt: string;
}
const Profile = ({ profileImage, name, createdAt }: ProfileProps) => {
  return (
    <ProtileSection>
      <img src={profileImage} />
      <div>
        <Name>{name}</Name>
        <Date>{createdAt}</Date>
      </div>
    </ProtileSection>
  );
};

export default Profile;

const ProtileSection = styled.section`
  display: flex;
  gap: 10px;
  height: 40px;
  padding: 12px 16px 0;
  box-sizing: content-box;
`;

const Name = styled.h3`
  margin: 5px 0;
  font-size: 15px;
  font-weight: 900;
  color: #050505;
`;

const Date = styled.p`
  display: block;
  margin-top: auto;
  font-size: 13px;
  color: #65676b;
`;
