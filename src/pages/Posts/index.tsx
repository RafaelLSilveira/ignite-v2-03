import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router-dom";
import remarkGfm from 'remark-gfm';
import { PostInfo } from "../../Components/PostInfo";
import { api } from "../../services/api";
import { PostContainer } from "./styles";

interface IPostData {
  title: string;
  login: string;
  url: string;
  content: string;
  updatedDate: Date;
  comments: number;
}

export const Posts = () => {
  const { slug } = useParams();
  const [postData, setPostData] = useState<IPostData>();

  useEffect(() => {
    api.defaults.baseURL="https://api.github.com/";
    api.get(`/repos/RafaelLSilveira/ignite-v2-03/issues/${slug}`).then(({ data }) => {
      setPostData({
        title: data.title,
        url: data.html_url,
        login: data.user.login,
        content: data.body,
        updatedDate: data.updated_at,
        comments: data.comments,
      })
    })
  }, [])
  
  return(
    <PostContainer>
      <PostInfo {...postData} />
      <ReactMarkdown 
        className="postMarkdown"
        children={postData?.content ?? ""} 
        remarkPlugins={[remarkGfm]}
      />,
    </PostContainer>
  )
} 