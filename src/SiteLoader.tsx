import './SiteLoader.css';
import './SiteLoaderResponsive.css';

function SiteLoader({showAudio, showImages}) {
    var isVisible;
    const visible = {};
    const notVisible = {display: 'none'};

    if (showAudio === true && showImages === true) {
        isVisible = notVisible;
    } else {
        isVisible = visible;
    };
    
    return (
        <>
            <div style={isVisible} className="site-loader">
                <div className="site-loader-bar-container">
                    <div className="site-loader-bar"></div>
                    <div className="site-loader-bar"></div>
                    <div className="site-loader-bar"></div>
                    <div className="site-loader-bar"></div>
                    <div className="site-loader-bar"></div>
                    <div className="site-loader-bar"></div>
                    <div className="site-loader-bar"></div>
                    <div className="site-loader-bar"></div>
                    <div className="site-loader-bar"></div>
                    <div className="site-loader-bar"></div>
                </div>
            </div>
        </>
    )
}

export default SiteLoader;