import React, { Component } from "react";
import GenericShareComponent from './GenericShareComponent';
import * as Icon from 'react-feather';


const socialList = [
    {
        type: 'Twitter',
        icon: <Icon.Twitter size={48} color="white"/>
    },
    {
        type: 'Instagram',
        icon: <Icon.Instagram size={48} color="white"/>
    },
    {
        type: 'Facebook',
        icon: <Icon.Facebook size={48} color="white"/>
    }
]

const twitterHandler = async (quote) => {
    window.open(`https://twitter.com/intent/tweet?text=${quote}`, '_blank')
}

const facebookHandler = (quote) => {
    console.log({quote})
    /*eslint-disable no-undef*/
    FB.ui({
        method: 'share',
        href: 'https://google.com/',
        quote: quote,
      }, function(response){
          console.log(response);
      });
    /*eslint-disable no-undef*/
}

const instagramHandler = () => {
    console.log('Instragram handler initialised')
}

const SocialMedia = props => { 
    const socialMediaTypeHandler = (e, type) => {
    
        if (type === 'Twitter') {
            console.log('Twitter work');
            twitterHandler(props.quote)
        } else if (type === 'Facebook') {
            facebookHandler(props.quote)
        } else if (type === 'Instagram') {
            instagramHandler(props.quote)
        }

    }

    return (
        <div style={{width:'100%'}}>
        {
            socialList.map((item, index) => {
                return <GenericShareComponent key={index} clicked={socialMediaTypeHandler} type={item.type} icon={item.icon} />
            })
        }
        </div>
    )
}

export default SocialMedia;