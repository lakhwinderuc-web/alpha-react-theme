import { useState } from 'react';
import { Icon } from '@hubspot/cms-components';

const HorizontalTabbing = ({ tabData }) => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (!tabData || tabData.length === 0) return null;

  return (
    <div className="horizontal-tabbing-intro-layout layout-two">
      <div className="horizontal-tabbing-container__tab horizontal-tabbing">
        <ul>
          {tabData.map((item, index) => (
            <li
              key={`tab-nav-${index}`}
              className={activeTabIndex === index ? 'active' : ''}
              onClick={() => setActiveTabIndex(index)}
              style={{ cursor: 'pointer' }}
            >
              {item.tab_name}
            </li>
          ))}
        </ul>
      </div>

     {/* 2. Content Box */}
<div className="horizontal-tabbing-intro__tab-box">
  {tabData.map((item, index) => {
  
    const content = item.icon_image_title; 
    
    return (
      <div
        key={`tab-content-${index}`}
        className={`horizontal-tabbing-intro__tab-content banner${index + 1} ${
          activeTabIndex === index ? 'active' : 'hidden'
        }`}
        style={{ display: activeTabIndex === index ? 'block' : 'none' }}
      >
        <div className={`horizontal-tabbing-intro__tab-content-wrap`}>
          
          {/* Left Section */}
          <div className="horizontal-tabbing-intro__left-section">
            <div className="horizontal-tabbing-intro__title">
              <div className={`horizontal-tabbing-intro__icon icon${index + 1}`}>
              
                {content?.image_icon_choice === "image" && content?.image_icon?.src && (
                  <img 
                    src={content.image_icon.src} 
                    alt={content.image_icon.alt || ''} 
                  />
                )}
                    {content?.image_icon_choice === "svg_icon" &&  (
                <div dangerouslySetInnerHTML={{__html:content.svg_code}}/>
                )}
                   {content?.image_icon_choice === "icon_field" && (
                <Icon fieldPath={`tab_content.tab_data[${index}].icon_image_title.icon_field`}/>
                )}
              </div>
            </div>

            
            {content?.description && (
              <div 
                className="horizontal-tabbing-intro__desc"
                dangerouslySetInnerHTML={{ __html: content.description }}
              />
            )}
          </div>

          {/* Right Section: Side Image */}
          <div className="horizontal-tabbing-intro__image">
            {content?.side_image?.src && (
              <img
                src={content.side_image.src}
                alt={content.side_image.alt || ''}
                height={content.height}
                width={content.width}
                loading="lazy"
              />
            )}
          </div>

        </div>
      </div>
    );
  })}
</div>
    </div>
  );
};

export default HorizontalTabbing;