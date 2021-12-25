import React from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import './InfoBox.css';

function InfoBox({title,cases,isRed,active,total,...props}) {
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'}
         ${isRed && 'infoBox--red' }`}>
            <CardContent>
                <Typography className={`title-box ${title==='Recovered' && 'title-box-white'}`} color='textSecondary'>
                    {title}
                </Typography>
                <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>{cases}</h2>
                <Typography className='infoBox__total'>
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
