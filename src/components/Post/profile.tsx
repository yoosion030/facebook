import * as S from './style';

interface ProfileProps {
  profileImage: string;
  name: string;
  createdAt: string;
}

const Profile = ({ profileImage, name, createdAt }: ProfileProps) => {
  return (
    <S.ProfileSection>
      <img src={profileImage} />
      <div>
        <S.Name>{name}</S.Name>
        <S.Date>{createdAt}</S.Date>
      </div>
    </S.ProfileSection>
  );
};

export default Profile;
