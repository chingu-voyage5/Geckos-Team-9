import React from 'react';
import GenericShareComponent from './GenericShareComponent';
import * as Icon from 'react-feather';

function formatQuote(q) {
  const arrQuote = q.split('\n    \n');
  const quote = `"${arrQuote[0]}" - ${arrQuote[1].trim().replace(',', '')}`;
  return quote;
}

const socialList = [
  // {
  //   type: 'Facebook',
  //   icon: <Icon.Facebook size={48} color="white" />
  // },
  {
    type: 'Twitter',
    icon: <Icon.Twitter size={48} color="white" />
  },
  {
    type: 'Instagram',
    icon: <Icon.Instagram size={48} color="white" />
  }
];

const twitterHandler = async quote => {
  const quoteAuthor = await formatQuote(quote);
  window.open(`https://twitter.com/intent/tweet?text=${quoteAuthor}`, '_blank');
};

const facebookHandler = (quote, img) => {
  const quoteAuthor = formatQuote(quote);
  /*eslint-disable no-undef*/
  FB.ui(
    {
      method: 'share',
      href: img,
      quote: quoteAuthor
    },
    function(response) {
      console.log(response);
    }
  );
  /*eslint-disable no-undef*/
};

const instagramHandler = () => {
  console.log('Instragram handler initialised');
};

const SocialMedia = props => {
  const socialMediaTypeHandler = (e, type) => {
    if (type === 'Twitter') {
      console.log('Twitter work');
      twitterHandler(props.quote);
    } else if (type === 'Facebook') {
      facebookHandler(props.quote, props.quoteImg);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {socialList.map((item, index) => {
        return (
          <GenericShareComponent
            key={index}
            clicked={socialMediaTypeHandler}
            type={item.type}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
};

export default SocialMedia;
