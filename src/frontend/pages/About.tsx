import { Container, Typography } from "@mui/material"
import React from "react"
import Link from "../components/Link"
import {useTheme} from "@mui/material"

export default function About(){
    const theme = useTheme();

    return <div>

        <Container
            sx={{
                marginTop : "50px",
                maxWidth : {
                    sm : "900px"
                }
            }}
        >


            <Typography
                variant="h1"
                sx={{
                    color : "primary.main"
                }}
            >
                About

                
            </Typography>

            <p>
                Server side rendered React typescript with vite and MaterialUI!                 
            </p>
        </Container>

    </div>
}