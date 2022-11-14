import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorite";
import React from "react";

function HomePage () {
    const estilosDaHomePage = { 
        // backgroundColor: "red"
    };
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    // console.log(config.playlists);
    return (
        <>
            <CSSReset />
            <div style={estilosDaHomePage}>       
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
            <Header />
            <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                Conteudo
            </Timeline>
            <Favorites favorites = {config.favorites}/>
          </div>
        </>
    );
}

export default HomePage

const StyledBanner = styled.div`
 height: 230px;
 background-image: url(https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
 background-position: center center;

`;

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 0px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.StyledBanner} />           
            <section className="user-info">
               <img src={`https://github.com/${config.github}.png`} />
               <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({searchValue, ...propriedades}) {
    const playlistNames = Object.keys(propriedades.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
               // console.log(playlistName);
               // console.log(videos)
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValurNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValurNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

function Favorites(propriedades) {
    const favoriteNames = Object.keys(propriedades.favorites);
    return (
        <StyledFavorites>
            {favoriteNames.map((favoriteName) => {
                const videos = propriedades.favorites[favoriteName];
                return (
                    <section key={favoriteName}>
                        <h2>{favoriteName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>{video.title}</span>
                                      </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledFavorites>
    )
}
