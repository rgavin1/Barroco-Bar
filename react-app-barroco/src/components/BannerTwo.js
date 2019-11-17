import React from 'react';


const BannerTwo = () => {
    return (
        <section style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100px',
            zIndex: 1
        }}>
            <video style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 'auto',
                minWidth: '100%',
                height: 'auto',
                minHeight: '100%',
                transform: 'translateX(-50%) translateY(-50%)',
                zIndex: -1
            }} autoPlay muted loop class="myVideo" poster="https://static.wixstatic.com/media/cb2e86_a1af32d37aea4588a5a9c2ae8430c5d3f000.jpg/v1/fill/w_720,h_383,al_c,q_80,usm_0.33_1.00_0.00/cb2e86_a1af32d37aea4588a5a9c2ae8430c5d3f000.jpg">
                <source src="https://video.wixstatic.com/video/cb2e86_a1af32d37aea4588a5a9c2ae8430c5d3/480p/mp4/file.mp4" />
            </video>
            <img style={{
                maxWidth: '100%',
                margin: '30px 0px'    
            }} src="https://static.wixstatic.com/media/cb2e86_fd0bc32b806a49a396492eed7e36cd24~mv2.png/v1/fill/w_1200,h_542,al_c,usm_0.66_1.00_0.01/cb2e86_fd0bc32b806a49a396492eed7e36cd24~mv2.png" alt="" />		
		</section>
    )
}

export default BannerTwo;