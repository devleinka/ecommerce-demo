import React from 'react';
import { withRouter } from 'react-router-dom';

import { 
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer 
        className={`${size} menu-item`} 
        onClick= {() => history.push(`${match.url}${linkUrl}`)} >
    <BackgroundImageContainer 
            className='background-image'
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
    />
        <ContentContainer className='content'>
            <ContentTitle className='title'>{title}</ContentTitle>
            <ContentSubtitle className='subtitle'>Shop Now</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);