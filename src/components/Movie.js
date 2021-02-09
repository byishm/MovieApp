import React, { Component } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const Image = styled.img`
padding-top:1em;
width:100%;
height:100%;
`;

const Content = styled.div`
  width: 19%;
`;


const Movie =({ movies ,title, overview, date, poster})=>{

const root = "https://image.tmdb.org/t/p/w500"
const boot = {poster}.poster
const poster_path =root.concat(boot)
    return (
        
            
                <Content>
                    <Image src={poster_path} onError={(e) => {
     e.target.src = 'https://blankposter.com/wp-content/uploads/2019/09/mahe_soulier_error-1.gif' }} title={title} ></Image>
         
                </Content>
                           
    )

}

export default Movie