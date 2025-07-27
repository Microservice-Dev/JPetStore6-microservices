import React from 'react';
import { useTranslation } from 'react-i18next';

import fishIcon from '@images/fish_icon.gif';
import dogIcon from '@images/dogs_icon.gif';
import catIcon from '@images/cats_icon.gif';
import reptileIcon from '@images/reptiles_icon.gif';
import birdIcon from '@images/birds_icon.gif';
import splash from '@images/splash.gif';

import {
    FISH,
    DOGS,
    REPTILES,
    CATS,
    BIRDS
} from '../const';

const Main: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div id="Content">
            <div id="Welcome">
                <div id="WelcomeContent">
                {/* 로그인 시 사용자 이름 */}
                </div>
            </div>

            <div id="Main">
                <div id="Sidebar">
                    <div id="SidebarContent">
                        <a href={FISH}>
                            <img src={fishIcon} />
                        </a> <br />
                        {t('fishdesc')} <br />
                        <a href={DOGS}>
                            <img src={dogIcon} />
                        </a> <br />
                        {t('dogdesc')} <br />
                        <a href={CATS}>
                            <img src={catIcon} />
                        </a> <br />
                        {t('catdesc')} <br />
                        <a href={REPTILES}>
                            <img src={reptileIcon} />
                        </a> <br />
                        {t('reptiledesc')} <br />
                        <a href={BIRDS}>
                            <img src={birdIcon} />
                        </a> <br />
                        {t('birddesc')}</div>
                    </div>

                    <div id="MainImage">
                        <div id="MainImageContent">
                        <map name="estoremap">
                            <area alt="Birds" coords="72,2,280,250"
                                href={BIRDS} shape="RECT" />
                            <area alt="Fish" coords="2,180,72,250"
                                href={FISH} shape="RECT" />
                            <area alt="Dogs" coords="60,250,130,320"
                                href={DOGS} shape="RECT" />
                            <area alt="Reptiles" coords="140,270,210,340"
                                href={REPTILES} shape="RECT" />
                            <area alt="Cats" coords="225,240,295,310"
                                href={CATS} shape="RECT" />
                            <area alt="Birds" coords="280,180,350,250"
                                href={BIRDS} shape="RECT" />
                        </map>
                        <img height="355" src={splash} useMap="#estoremap" width="350" />
                    </div>
                </div>

                <div id="Separator">&nbsp;</div>
            </div>
        </div>
    );
}

export default Main;