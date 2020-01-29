import React from 'react';
import { Footer } from '../styled-components/Shared';
import ftrlogo from '../css/images/DPL-white.svg';


const SiteFooter = () => (
    <>
        <Footer>
            <div className="ftr-logo">
                <img src={ftrlogo} alt="ftr-logo"/>
            </div>
        </Footer>
    </>
)

export default SiteFooter;