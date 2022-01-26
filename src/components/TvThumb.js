import React from 'react'
import * as api from "../api"
import { Link } from 'react-router-dom';




import { Card, Image, Text, Badge, Button, Group, useMantineTheme , Center } from '@mantine/core';

export default function TvThumb(props) {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];


    return (
                    <Card shadow="sm" padding="lg" style={{ backgroundColor: '#212529' }}>
                    <Card.Section>
                         <Image src={`${api.imgUrl}${api.imgSize}${props.poster_path}`}  alt="Norway" />
                    </Card.Section>


                        <Text color="white" align="center" size="xl" weight={700}>{props.name}</Text>
                        
                        <Card.Section style={{ marginBottom:30, marginTop: 30}}>
                        <Group position="center" spacing="xs">
                        {props?.genre?.map((x)=>{
                         
                         //  console.log("asdasdasdasd")
                          return  <Link to={`/genre/${x.id}`} > 
                                   <Button color="cyan" compact radius="xl"key={x.id}> {x.genre}</Button>
                                 </Link>
                      })}

                            </Group>
                            </Card.Section>
                          
                            <Center style={{ marginBottom:30, marginTop: 30,
                                 display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                             <Badge color="pink" variant="light">
                                    On Sale
                             </Badge>
                        </Center>
                       
                </Card>
    )
}
