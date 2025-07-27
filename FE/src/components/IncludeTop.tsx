import React from 'react';
import { useTranslation } from 'react-i18next';

import logoTopbar from '@images/logo-topbar.gif';
import cart from '@images/cart.gif';
import separator from '@images/separator.gif';
import fish from '@images/sm_fish.gif';
import dog from '@images/sm_dogs.gif';
import bird from '@images/sm_birds.gif';
import cat from '@images/sm_cats.gif';
import reptile from '@images/sm_reptiles.gif';

import {
    SIGNIN,
    SIGNOUT,
    EDIT_ACCOUNT,
    CART,
    HELP,
    HOME,
    FISH,
    DOGS,
    REPTILES,
    CATS,
    BIRDS,
} from '../const';

import '@styles/includeTop.css';

const IncludeTop: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div id="Header">
            <div id="Logo">
                <div id="LogoContent">
                    <a href={HOME}>
                        <img src={logoTopbar} />
                    </a>
                </div>
            </div>

            <div id="Menu">
                <div id="MenuContent">
                    <a href={CART}>
                        <img src={cart} />
                    </a>
                    
                    <img src={separator} className="separator" /> 
                    {/* 사용자가 로그인 상태 아닐 경우. */}
                    <a href={SIGNIN}> {t('signin')} </a>

                    {/* 사용자가 로그인 상태인 경우. */}
                    <a href={SIGNOUT}> {t('signout')} </a>
                    <img src={separator} className="separator" />
                    <a href={EDIT_ACCOUNT}> {t('userinfo')} </a>

                    <img src={separator} className="separator" />
                    <a href={HELP}>?</a>
                </div>
            </div>
            <div id="Search">
                <div id="SearchContent">
                    {/* 검색 폼 */}
                    <form action="/catalog/searchProducts" method="get">
                        <input type="text" name="keywords" size={20} placeholder="Enter keyword" />
                        <span>&nbsp;</span>
                        <input type="submit" value={t('search')} />
                    </form>
                </div>
            </div>

            <div id="QuickLinks">
                <a href={FISH}>
                    <img src={fish} />
                </a>
                <img src={separator} className="separator" />
                <a href={DOGS}>
                    <img src={dog} />
                </a>
                <img src={separator} className="separator" />
                <a href={REPTILES}>
                    <img src={reptile} />
                </a>
                <img src={separator} className="separator" />
                <a href={CATS}>
                    <img src={cat} />
                </a>
                <img src={separator} className="separator" />
                <a href={BIRDS}>
                    <img src={bird} />
                </a>
            </div>
        </div>
    );
}

export default IncludeTop;