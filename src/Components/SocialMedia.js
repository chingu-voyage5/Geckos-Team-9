import React, { Component } from "react";
import GenericShareComponent from './GenericShareComponent';


const socialList = [
    {
        type: 'Twitter',
    },
    {
        type: 'Instagram'
    },
    {
        type: 'Facebook'
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
            twitterHandler(props.quote)
        } else if (type === 'Facebook') {
            facebookHandler(props.quote)
        } else if (type === 'Instagram') {
            instagramHandler(props.quote)
        }

    }

    return (
        <div>
        {
            socialList.map((item, index) => {
                return <GenericShareComponent key={index} clicked={socialMediaTypeHandler} type={item.type} />
            })
        }
        </div>
    )
}

export default SocialMedia;