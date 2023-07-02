import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { AvatarContainer, Heading, PersonalInfoContainer, TextBio } from "./styles";

interface IUserData {
  name: string;
  login: string;
  url: string;
  bio: string;
  company: string;
  avatarUrl: string;
  followers: number;
  following: number;
}

export const PersonalInfo = (): ReactElement => {
  const [userData, setUserData] = useState<IUserData>();

  useEffect(() => {
    api.get("/users/RafaelLSilveira").then(
      ({data}) => 
        setUserData({
          name: data.name,
          login: data.login,
          url: data.html_url,
          bio: data.bio,
          company: data.company,
          avatarUrl: data.avatar_url,
          followers: data.followers,
          following: data.following,
        })
    )
  }, [])

  return (
    <>{userData ? 
    <PersonalInfoContainer>
      <AvatarContainer url={userData.avatarUrl} />
      <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "space-between" }}>
        <Heading>
          <p>{userData.name}</p>
          <Link to={userData.url}>
            GITHUB{" "}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Heading>
        <TextBio>{userData.bio}</TextBio>
        <div style={{ display: "flex", gap: 8}}>
          <FontAwesomeIcon 
            icon={faGithub}
            unicode="f09b"
            color='rgba(58, 83, 107, 1)'
            height={18} 
            width={18}
          />
          <span>{userData.login}</span>
          <FontAwesomeIcon 
            icon={faBuilding}
            color='rgba(58, 83, 107, 1)'
            height={18} 
            width={18}
          />
          <span>{userData.company ?? "Não informado"}</span>
          <FontAwesomeIcon 
            icon={faUserGroup}
            color='rgba(58, 83, 107, 1)'
            height={18} 
            width={18}
          />
          <span>{`${userData.followers} seguidores`}</span>
        </div>
      </div>
    </PersonalInfoContainer> 
  : null}
  </>)
}