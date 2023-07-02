import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { getPastTime } from "../../utils/getPastTime";
import { Heading, PostFooter, PostInfoContainer } from "./styles";

interface IPostInfo {
  title?: string;
  url?: string;
  login?: string;
  updatedDate?: Date;
  comments?: number;
}

export const PostInfo = (props: IPostInfo): ReactElement => {
  return (
    <>
      <PostInfoContainer>
        <Heading>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            {" "}VOLTAR
          </Link>
          <Link to={props?.url ?? "/"}>
            VER NO GITHUB{" "}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Heading>
        <p>{props.title}</p>
        <PostFooter>
          <FontAwesomeIcon 
            icon={faGithub}
            unicode="f09b"
            color='rgba(58, 83, 107, 1)'
            height={18} 
            width={18}
          />
          <span>{props.login}</span>
          <FontAwesomeIcon 
            icon={faCalendarDay}
            color='rgba(58, 83, 107, 1)'
            height={18} 
            width={18}
          />
          <span>{getPastTime(props?.updatedDate)}</span>
          <FontAwesomeIcon 
            icon={faComment}
            color='rgba(58, 83, 107, 1)'
            height={18} 
            width={18}
          />
          <span>{`${props.comments} comentários`}</span>
        </PostFooter>
      </PostInfoContainer> 
    </>
  )
}