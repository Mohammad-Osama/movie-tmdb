import React from 'react'
import * as api from "../api"
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react'
import { useParams } from 'react-router'

import { Card, Image, Text, Badge, Button, Group, useMantineTheme , Center } from '@mantine/core';




export default function Tv() {
    const {id}=useParams()
    const [tv , SetTv]=useState({})



    async function getTvInfo(id){
            const tvInfo= await api.getTvInfo(id)
                 SetTv(tvInfo)

    }

        useEffect(() => {
            getTvInfo(id)
            return () => {
                SetTv({})
            }
        }, [])



    return (
        <Image src={`${api.imgUrl}${api.imgSizeLarge}${tv?.poster_path}` }      />  
    )
}
