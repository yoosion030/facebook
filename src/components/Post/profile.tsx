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
