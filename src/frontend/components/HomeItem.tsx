import React from "react"
import { IconType } from "react-icons"
import {Grid, Paper, Typography, Icon} from "@mui/material"
import Link from './Link';
import {useTheme} from "@mui/material";

interface itemProps {
    type : string;
    description : string;
    icon? : IconType;
    href? : string;
    onclick? : (event : React.MouseEvent) => void;
  }
  
export default function HomeItem( props : itemProps){
    const theme : any = useTheme();

    return (
        <Grid key={1} item>
            <Paper
                sx={{
                    height: {xs : 220, md : 250},
                    width: {xs : 180, md : 200},
                }}
                >
                
                <Link to={props.href} onclick={props.onclick}>
                    {
                        props.icon  && ( 

                        <props.icon
                            style={{
                                marginTop : "20px",
                                marginLeft : "auto" ,
                                marginRight : "auto",
                                marginBottom: "0px",
                                width : "100%",
                                height : "80px",
                                color : theme.palette.primary.main
                            }}
                        />
                        )
                    }

                    <Typography
                        sx={{
                            textAlign :"center",
                            marginTop : "10px",
                            marginBottom : "10px"
                        }}
                        variant="h3"
                    >
                        {props.type}
                    </Typography>

                </Link>


                <Typography
                    sx={{
                        textAlign : "center",
                        marginBottom : 0,
                        marginTop : 0
                    }}
                >
                    {props.description} 
                </Typography>
        </Paper>
        </Grid>

    );
}