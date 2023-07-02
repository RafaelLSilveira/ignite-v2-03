
import { KeyboardEvent, ReactElement, useCallback, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { PersonalInfo } from "../../Components/Personalnfo";
import { api } from "../../services/api";
import { getPastTime } from "../../utils/getPastTime";
import { HomeContainer, ListPostContainer, PostCard, PostDate, PostDescription, PostTitle, SearchContainer, SearchHeader } from "./styles";

interface IListPost {
  total: number;
  items?: {
    id: number;
    number: number;
    title: string;
    shortDescription: string;
    updatedDate: Date;
  }[]
}

export function Home():ReactElement {
  const navigate = useNavigate();
  const [listPost, setListPost] = useState<IListPost>();

  const getPosts = useCallback((searchParam?: string) => {
    api.get(`/search/issues?q=${searchParam ?? ""} repo:RafaelLSilveira/ignite-v2-03/`).then(
      ({data}) => 
        setListPost({
          total: data.total_count,
          items: data.items.map((item: any) => ({ 
            id: item.id,
            number: item.number,
            title: item.title,
            shortDescription: item.body.slice(0, 100),
            updatedDate: item.updated_at,
          }))    
        })
    );
  }, [])

  useEffect(() => {
   getPosts();
  }, [])

  const handleInputChange = (event:KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    getPosts(target.value);
  }

  return (
    <HomeContainer>
      <PersonalInfo />
      <SearchContainer>
        <SearchHeader> 
          <p>Publicações</p>
          <span>{listPost?.total} publicações</span>
        </SearchHeader>  
        <input type="text" placeholder="Buscar conteúdo" onKeyUp={(event) => handleInputChange(event)} />
      </SearchContainer>
      <ListPostContainer>
        {listPost?.items ? listPost?.items.map((item) => (
          <PostCard key={item.id} onClick={() => navigate(`/posts/${item.number}`)}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <PostTitle>{item.title}</PostTitle>
              <PostDate>{getPastTime(item.updatedDate)}</PostDate> 
            </div>
            <PostDescription>{item.shortDescription}</PostDescription>
          </PostCard>
        )) : null}
      </ListPostContainer>
    </HomeContainer>
  )
};