import { Island, RichText } from "@hubspot/cms-components";
import { useId } from "react";
import noImg from "../../../images/noimage.png";

export const Component = ({ fieldValues, hublData }) => {
  const { posts = [] } = hublData;
  const {
    show_author_name,
    show_publish_date,
    show_topics,
    show_read_more,
    read_more_text,
    first_post_show_hide,
  } = fieldValues;

  console.log("first_post_show_hide", first_post_show_hide);

  const customClass = fieldValues?.custom_id_class?.class;
  const customId = fieldValues?.custom_id_class?.custom_id;
  const reactId = useId();
  const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;

  const blogBasePath = posts[0].absoluteUrl.split("/").slice(0, -1).join("/");

  const authorSlug = posts[0].authorName
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  // ---- Extract Dynamic Style Fields ----
  const ds = fieldValues.style?.spacing?.desktop?.desktop_spacing || {};
  const desktopStyle = {
    paddingTop:
      (ds.padding?.top?.value || 0) + (ds.padding?.top?.units || "px"),
    paddingBottom:
      (ds.padding?.bottom?.value || 0) + (ds.padding?.bottom?.units || "px"),
    paddingLeft:
      (ds.padding?.left?.value || 0) + (ds.padding?.left?.units || "px"),
    paddingRight:
      (ds.padding?.right?.value || 0) + (ds.padding?.right?.units || "px"),
    marginTop: (ds?.margin?.top?.value || 0) + (ds?.margin?.top?.units || "px"),
    marginBottom:
      (ds?.margin?.bottom?.value || 0) + (ds?.margin?.bottom?.units || "px"),
  };

  const ts = fieldValues.style?.spacing?.tablet?.tablet_spacing || {};
  const tabletStyle = {
    paddingTop:
      (ts.padding?.top?.value || 0) + (ts.padding?.top?.units || "px"),
    paddingBottom:
      (ts.padding?.bottom?.value || 0) + (ts.padding?.bottom?.units || "px"),
    paddingLeft:
      (ts.padding?.left?.value || 0) + (ts.padding?.left?.units || "px"),
    paddingRight:
      (ts.padding?.right?.value || 0) + (ts.padding?.right?.units || "px"),
    marginTop: (ts?.margin?.top?.value || 0) + (ts?.margin?.top?.units || "px"),
    marginBottom:
      (ts?.margin?.bottom?.value || 0) + (ts?.margin?.bottom?.units || "px"),
  };

  const ms = fieldValues.style?.spacing?.mobile?.mobile_spacing || {};
  const mobileStyle = {
    paddingTop:
      (ms.padding?.top?.value || 0) + (ms.padding?.top?.units || "px"),
    paddingBottom:
      (ms.padding?.bottom?.value || 0) + (ms.padding?.bottom?.units || "px"),
    paddingLeft:
      (ms.padding?.left?.value || 0) + (ms.padding?.left?.units || "px"),
    paddingRight:
      (ms.padding?.right?.value || 0) + (ms.padding?.right?.units || "px"),
    marginTop: (ms?.margin?.top?.value || 0) + (ms?.margin?.top?.units || "px"),
    marginBottom:
      (ms?.margin?.bottom?.value || 0) + (ms?.margin?.bottom?.units || "px"),
  };

  // card padding
  const cardPaddingDs =
    fieldValues?.style?.cards_style?.card_padding?.desktop_spacing
      ?.card_padding_desktop;
  const cardPaddingMs =
    fieldValues?.style?.cards_style?.card_padding?.mobile_spacing
      ?.card_padding_mobile;

      console.log("cardPaddingMs", cardPaddingDs);
  const cardStyleDs = {
    paddingTop:
      (cardPaddingDs.padding?.top?.value || 0) +
      (cardPaddingDs.padding?.top?.units || "px"),
    paddingBottom:
      (cardPaddingDs.padding?.bottom?.value || 0) +
      (cardPaddingDs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardPaddingDs.padding?.left?.value || 0) +
      (cardPaddingDs.padding?.left?.units || "px"),
    paddingRight:
      (cardPaddingDs.padding?.right?.value || 0) +
      (cardPaddingDs.padding?.right?.units || "px"),
    marginTop:
      (cardPaddingDs?.margin?.top?.value || 0) +
      (cardPaddingDs?.margin?.top?.units || "px"),
    marginBottom:
      (cardPaddingDs?.margin?.bottom?.value || 0) +
      (cardPaddingDs?.margin?.bottom?.units || "px"),
  };



  const cardStyleMs = {
    paddingTop:
      (cardPaddingMs.padding?.top?.value || 0) +
      (cardPaddingMs.padding?.top?.units || "px"),
    paddingBottom:
      (cardPaddingMs.padding?.bottom?.value || 0) +
      (cardPaddingMs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardPaddingMs.padding?.left?.value || 0) +
      (cardPaddingMs.padding?.left?.units || "px"),
    paddingRight:
      (cardPaddingMs.padding?.right?.value || 0) +
      (cardPaddingMs.padding?.right?.units || "px"),
    marginTop:
      (cardPaddingMs?.margin?.top?.value || 0) +
      (cardPaddingMs?.margin?.top?.units || "px"),
    marginBottom:
      (cardPaddingMs?.margin?.bottom?.value || 0) +
      (cardPaddingMs?.margin?.bottom?.units || "px"),
  };

  // card per row
  const cardsPerRowDs =
    fieldValues?.style?.cards_style?.cards_per_row?.desktop_cards_per_row
      ?.card_per_row_choice_ds;
  const cardsGapDs =
    fieldValues?.style?.cards_style?.cards_per_row?.desktop_cards_per_row
      ?.gap_between_cards_ds;

const cardsPerRowTs=fieldValues?.style?.cards_style?.cards_per_row?.tablet_cards_per_row?.card_per_row_choice_ts;
 const cardsGapTs=fieldValues?.style?.cards_style?.cards_per_row?.tablet_cards_per_row?.gap_between_cards_ts;

 const cardsPerRowSt=fieldValues?.style?.cards_style?.cards_per_row?.small_tablet_cards_per_row?.card_per_row_choice_st;
const cardsGapSt=fieldValues?.style?.cards_style?.cards_per_row?.small_tablet_cards_per_row?.gap_between_cards_st;
 
//card-border 
const cardBorderRadius=fieldValues?.style?.cards_style?.card_border_radius?.card_border;
const cardTextAlignment=fieldValues?.style?.cards_style?.card_content_alignment?.content_alignment?.horizontal_align;
const cardBorderStyle=fieldValues?.style?.cards_style?.card_border_style?.style;
const cardBackgroundColor=fieldValues?.style?.cards_style?.card_background_color?.color;
const imageBorderRadius=fieldValues?.style?.cards_style?.image_border_radius;


console.log("cardBorderStyle",cardBorderStyle)
// card-shadow

const boxShadowEnable=fieldValues?.style?.cards_style?.box_shadow_enable;
const {horizontal_offset,vertical_offset,blur_radius,spread_radius}=fieldValues?.style?.cards_style?.box_shadow;
const border_color=fieldValues?.style?.cards_style?.box_shadow?.border_color?.color;
const boxShadowStyle = boxShadowEnable 
  ? `${horizontal_offset}px ${vertical_offset}px ${blur_radius}px ${spread_radius}px ${border_color}` 
  : 'none';

// card-inner-padding
const cardInnerPaddingDs=fieldValues?.style?.cards_style?.cards_inner_padding?.desktop_spacing?.card_padding_desktop;
const cardInnerPaddingMs=fieldValues?.style?.cards_style?.cards_inner_padding?.mobile_spacing?.card_padding_mobile;

  const cardInnerStyleDs = {
    paddingTop:
      (cardInnerPaddingDs.padding?.top?.value || 0) +
      (cardInnerPaddingDs.padding?.top?.units || "px"),
    paddingBottom:
      (cardInnerPaddingDs.padding?.bottom?.value || 0) +
      (cardInnerPaddingDs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardInnerPaddingDs.padding?.left?.value || 0) +
      (cardInnerPaddingDs.padding?.left?.units || "px"),
    paddingRight:
      (cardInnerPaddingDs.padding?.right?.value || 0) +
      (cardInnerPaddingDs.padding?.right?.units || "px"),
    marginTop:
      (cardInnerPaddingDs?.margin?.top?.value || 0) +
      (cardInnerPaddingDs?.margin?.top?.units || "px"),
    marginBottom:
      (cardInnerPaddingDs?.margin?.bottom?.value || 0) +
      (cardInnerPaddingDs?.margin?.bottom?.units || "px"),
  };
        const cardInnerStyleMs = {
    paddingTop:
      (cardInnerPaddingMs.padding?.top?.value || 0) +
      (cardInnerPaddingMs.padding?.top?.units || "px"),
    paddingBottom:
      (cardInnerPaddingMs.padding?.bottom?.value || 0) +
      (cardInnerPaddingMs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardInnerPaddingMs.padding?.left?.value || 0) +
      (cardInnerPaddingMs.padding?.left?.units || "px"),
    paddingRight:
      (cardInnerPaddingMs.padding?.right?.value || 0) +
      (cardInnerPaddingMs.padding?.right?.units || "px"),
    marginTop:
      (cardInnerPaddingMs?.margin?.top?.value || 0) +
      (cardInnerPaddingMs?.margin?.top?.units || "px"),
    marginBottom:
      (cardInnerPaddingMs?.margin?.bottom?.value || 0) +
      (cardInnerPaddingMs?.margin?.bottom?.units || "px"),
  };

  // Tag Styling
  const tagColor=fieldValues?.style?.tag_style?.tag_color?.color;
  const tagBackgroundColor=fieldValues?.style?.tag_style?.tag_background_color?.color;
  const tagBorderColor=fieldValues?.style?.tag_style?.tag_border_color?.color;
  const tagBorderRadiusTopRight=fieldValues?.style?.tag_style?.tag_boder_top_right_radius;

  // contaner-Width
  const containerChoice=fieldValues?.style?.custom_container?.container_choice;
  const containerWidth= fieldValues?.style?.custom_container?.container_max_width;
  
const finalWidth = 
  containerChoice === "custom-container" ? `${containerWidth}px` : 
  containerChoice === "page-center" ? "1200px" : 
  "100%";


  // headingStyle

  const headingWidth=fieldValues?.style?.heading_style?.max_width;
  const headingMarginBottom=fieldValues?.style?.heading_style?.heading_bottom_margin;

  // background
  const bg = fieldValues.style?.background;
  let backgroundCSS = "";

  // gradient background
  if (bg?.background_type === "bg_color" && bg?.bg_gradient) {
    const vertical = bg.bg_gradient.side_or_corner?.verticalSide;
    const horizontal = bg.bg_gradient.side_or_corner?.horizontalSide;

    let direction = "to bottom";
    if (vertical && horizontal) {
      direction = `to ${vertical.toLowerCase()} ${horizontal.toLowerCase()}`;
    } else if (vertical) {
      direction = vertical.toLowerCase() === "top" ? "to top" : "to bottom";
    } else if (horizontal) {
      direction = horizontal.toLowerCase() === "left" ? "to left" : "to right";
    }

    const rgbaColors = bg.bg_gradient.colors.map((c) => {
      const col = c.color;
      return `rgba(${col.r}, ${col.g}, ${col.b}, ${col.a})`;
    });

    backgroundCSS = `
    background: linear-gradient(
      ${direction},
      ${rgbaColors.join(", ")}
    );
  `;
  }

  if (bg?.background_type === "bg_image" && bg?.bg_image) {
    const positionMap = {
      TOP_LEFT: "top left",
      TOP_CENTER: "top center",
      TOP_RIGHT: "top right",
      MIDDLE_LEFT: "center left",
      MIDDLE_CENTER: "center center",
      MIDDLE_RIGHT: "center right",
      BOTTOM_LEFT: "bottom left",
      BOTTOM_CENTER: "bottom center",
      BOTTOM_RIGHT: "bottom right",
    };

    const bgPos =
      positionMap[bg.bg_image.background_position] || "center center";
    backgroundCSS = `
    background-image: url(${bg.bg_image.src});
    background-size: ${bg.bg_image.background_size};
    background-position: ${bgPos};
  `;
  }
  return (
    <>
      <style>
        {`
      .blog-listing-post.${uniqueClass} {
         ${backgroundCSS}
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
           margin-top:${desktopStyle.marginTop};
      margin-bottom: ${desktopStyle.marginBottom};
      

        }
  @media(max-width:1024px) {
          .blog-listing-post.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop} ;
            padding-bottom: ${tabletStyle.paddingBottom} ;
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
             margin-top:${tabletStyle.marginTop};
      margin-bottom:${tabletStyle.marginBottom};
          }

        }

        @media(max-width:767px) {
          .blog-listing-post.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
             margin-top:${mobileStyle.marginTop};
      margin-bottom:${mobileStyle.marginBottom};
          }
        }

        .${uniqueClass} .blog-listing-post__container{
        max-width:${finalWidth};
        }
        .blog-listing-post.${uniqueClass} .content-wrapper{
      position: relative;
    z-index: 1;
        }
       .blog-listing-post.${uniqueClass} .post-heading{
          margin-bottom: ${headingMarginBottom}px;
      }
          .${uniqueClass} .blog-listing-post_heading{
           margin-bottom: ${headingMarginBottom}px;
           max-width:${headingWidth}px;
          }
          .${uniqueClass} .blog-listing-post__cards{
           flex: 0 0 calc((100% - (3 - 1) * 1.5rem) / ${cardsPerRowDs});
          text-align: ${cardTextAlignment};
          }

           .${uniqueClass} .blog-listing-post__cards_flex{
         display: flex;
         flex-wrap: wrap;
         gap:${cardsGapDs}px;
     }
           @media(max-width:850px){
            .${uniqueClass} .blog-listing-post__cards{
             flex: 0 0 calc((100% - (3 - 1) * 1.5rem) / ${cardsPerRowTs});
            }
              .${uniqueClass} .blog-listing-post__cards_flex{
              gap:${cardsGapTs}px;
              }
           }
              @media(max-width:580px){
            .${uniqueClass} .blog-listing-post__cards{
             flex: 0 0 calc((100% - (3 - 1) * 1.5rem) / ${cardsPerRowSt});
            }
              .${uniqueClass} .blog-listing-post__cards_flex{
              gap:${cardsGapSt}px;
              }
           }

          .${uniqueClass} .blog-listing-post__cards-items{
              border: 0px ${cardBorderStyle} #EFEFEF;
    padding: 0px;
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: ${cardBorderRadius}px;
    box-shadow: ${boxShadowStyle};
    background-color: ${cardBackgroundColor};
      padding-top: ${cardStyleDs.paddingTop};
          padding-bottom: ${cardStyleDs.paddingBottom};
          padding-left: ${cardStyleDs.paddingLeft};
          padding-right: ${cardStyleDs.paddingRight};
           margin-top:${cardStyleDs.marginTop};
      margin-bottom: ${cardStyleDs.marginBottom};

}

@media(max-width:767px){
.${uniqueClass} .blog-listing-post__cards-items{
  padding-top: ${cardStyleMs.paddingTop};
          padding-bottom: ${cardStyleMs.paddingBottom};
          padding-left: ${cardStyleMs.paddingLeft};
          padding-right: ${cardStyleMs.paddingRight};
           margin-top:${cardStyleMs.marginTop};
      margin-bottom: ${cardStyleMs.marginBottom};
}
}

.${uniqueClass} .blog-listing-post__card-img{
    position: relative;
}

.${uniqueClass} .blog-listing-post__card-img .card-img-link{
border-radius:${imageBorderRadius}px;
}
          .${uniqueClass} .blog-listing-post_item-topics{    
    position: absolute;
      }
     .${uniqueClass} .blog-listing-post_item-topics .blog-listing-post_topic-link{
         background-color: ${tagBackgroundColor};
    border: 1px solid ${tagBorderColor};
    border-top-right-radius: ${tagBorderRadiusTopRight}px;
    color:${tagColor};
    padding: 0.3125rem 1.0rem;
    max-width: fit-content;
    display: inline-block;
     }

     .${uniqueClass} .blog-listing-post_item-data{
padding-top: ${cardInnerStyleDs.paddingTop};
          padding-bottom: ${cardInnerStyleDs.paddingBottom};
          padding-left: ${cardInnerStyleDs.paddingLeft};
          padding-right: ${cardInnerStyleDs.paddingRight};
           margin-top:${cardInnerStyleDs.marginTop};
      margin-bottom: ${cardInnerStyleDs.marginBottom};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
     }

     @media(max-width:767px){
      .${uniqueClass} .blog-listing-post_item-data{
      padding-top: ${cardInnerStyleMs.paddingTop};
          padding-bottom: ${cardInnerStyleMs.paddingBottom};
          padding-left: ${cardInnerStyleMs.paddingLeft};
          padding-right: ${cardInnerStyleMs.paddingRight};
           margin-top:${cardInnerStyleMs.marginTop};
      margin-bottom: ${cardInnerStyleMs.marginBottom};
      }
     }

     .${uniqueClass} .blog-listing-post_read-social{
         display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    justify-content: space-between;
    margin-top: 1.25rem;
}
     }
      `}
      </style>
      <section
        {...(customId ? { id: customId } : {})}
        className={`blog-listing-post ${uniqueClass}  ${customClass ? customClass : ""}`}
      >
        <div className="blog-listing-post__container content-wrapper">
          <div className="blog-listing-post__inner">
            {first_post_show_hide && (
              <>
                <div className="blog-listing-post_heading post-heading">
                  <RichText fieldPath="first_post_heading.first_post_title" />
                </div>
                <div className="blog-listing-post__cards first-recent-post cards_1">
                  <div className="blog-listing-post__cards-items">
                    <div className="blog-listing-post__card-img">
                      {/* image */}
                      {posts[0].featuredImage && (
                        <a className="card-img-link" href={posts.absoluteUrl}>
                          <img className="image"
                            src={posts[0].featuredImage || noImg}
                            alt={posts[0].featuredImageAltText || posts.title}
                            width={posts[0].featuredImageWidth}
                            height={posts[0].featuredImageHeight}
                            loading="lazy"
                          />
                        </a>
                      )}
                    </div>
                    <div className="blog-listing-post_item-topics">
                      {posts[0].topicNames.map((tag, index) => {
                        const tagSlug = tag
                          .toLowerCase()
                          .trim()
                          .replace(/\s+/g, "-");

                        return (
                          <a
                            key={index}
                            href={`${blogBasePath}/tag/${tagSlug}`}
                            className="blog-listing-post_topic-link"
                          >
                            {tag}
                          </a>
                        );
                      })}
                    </div>

                    <div className="blog-listing-post_item-data">
                      <div className="blog-listing-post_item-title">
                        <h3>
                          <a href={posts[0].absoluteUrl}>{posts[0].title}</a>
                        </h3>
                        <span className="blog-listing-post_author-date">
                          {show_author_name && (
                            <>
                              <a href={`${blogBasePath}/author/${authorSlug}`}>
                                {posts[0].authorName}
                              </a>
                              <span> | </span>
                            </>
                          )}

                          {posts[0].publishDate && show_publish_date && (
                            <>
                              {new Date(
                                posts[0].publishDate
                              ).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="blog-listing-post_item-desc">
                      <p>{posts[0].body}</p>
                    </div>
                    <div className="blog-listing-post_read-social">
                      <a href={posts[0].absolute_url}>{read_more_text}</a>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div
              className="blog-listing-post__heading"
              dangerouslySetInnerHTML={{
                __html: fieldValues.blog_listing_heading.blog_heading,
              }}
            />
            <div className="blog-listing-post__cards_flex">
              {posts.map((post, index) => {
                const blogBasePath = post.absoluteUrl
                  .split("/")
                  .slice(0, -1)
                  .join("/");

                const authorSlug = post.authorName
                  .toLowerCase()
                  .trim()
                  .replace(/\s+/g, "-");
                return (
                  <div className="blog-listing-post__cards" key={index}>
                    <div className="blog-listing-post__cards-items">
                      <div className="blog-listing-post__card-img">
                        {/* image */}
                        {post.featuredImage && (
                          <a className="card-img-link" href={post.absoluteUrl}>
                            <img className="card-image"
                              src={post.featuredImage || noImg}
                              alt={post.featuredImageAltText || post.title}
                              width={post.featuredImageWidth}
                              height={post.featuredImageHeight}
                              loading="lazy"
                            />
                          </a>
                        )}
                      </div>
                      {/* TAGS */}
                      {post.topicNames?.length > 0 && show_topics && (
                        <div className="blog-listing-post_item-topics">
                          {post.topicNames.map((tag, index) => {
                            const tagSlug = tag
                              .toLowerCase()
                              .trim()
                              .replace(/\s+/g, "-");

                            return (
                              <a
                                key={index}
                                href={`${blogBasePath}/tag/${tagSlug}`}
                                className="blog-listing-post_topic-link"
                              >
                                {tag}
                              </a>
                            );
                          })}
                        </div>
                      )}

                      <div className="blog-listing-post_item-data">
                        <div className="blog-listing-post_item-title">
                          <h3>
                            <a href={post.absoluteUrl}>{post.title}</a>
                          </h3>
                          <span className="blog-listing-post_author-date">
                            {show_author_name && (
                              <>
                                <a
                                  href={`${blogBasePath}/author/${authorSlug}`}
                                >
                                  {post.authorName}
                                </a>
                                <span> | </span>
                              </>
                            )}

                            {post.publishDate && show_publish_date && (
                              <>
                                {new Date(post.publishDate).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )}
                              </>
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="blog-listing-post_item-desc">
                        <p>{post.body}</p>
                      </div>
                      {show_read_more && (
                        <div className="blog-listing-post_read-social">
                          <a href={post.absolute_url}>{read_more_text}</a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { fields } from "./fields.js";
export const hublDataTemplate = `
  {# Ensure we have a valid blog ID #}
  {% set blog_id = module.select_blog or 'default' %}
  {% set limit = module.style.number_post_show.number_of_post or 3 %}
  {% set choice = module.recent_post_tag_recent_post_choice %}
  
  {% set posts_data = [] %}

  {% if choice == "blog_recent" %}
    {% set posts_data = blog_recent_posts(blog_id, limit) %}
  {% elif choice == "tag_related" %}
    {# content.topic_list exists only if this module is placed on a Blog Post #}
    {% if content.topic_list %}
       {% set posts_data = blog_recent_tag_posts(blog_id, content.topic_list[0].slug, limit) %}
    {% else %}
       {% set posts_data = blog_recent_posts(blog_id, limit) %}
    {% endif %}
  {% elif choice == "listing_page" %}
    {% set posts_data = contents %}
  {% endif %}

  {% set formatted_posts = [] %}
  {% for post in posts_data %}
    {# Extract topic names into a simple array for React #}
    {% set t_names = [] %}
    {% for topic in post.topic_list %}
      {% do t_names.append(topic.name) %}
    {% endfor %}

    {% do formatted_posts.append({
        id: post.id,
        title: post.name,
        absoluteUrl: post.absolute_url,
        featuredImage: post.featured_image,
        publishDate: post.publish_date,
        authorName: post.blog_post_author.display_name,
        topicNames: t_names,
        body: post.post_summary|striptags|truncate(150, True, '...')
      }) %}
  {% endfor %}

  {% set hublData = {
    'posts': formatted_posts,
    'choice': choice
  } %}
`;

export const meta = {
  label: "Blog Listing Posting",
  css_assets: [],
  external_js: [],
  global: false,
  help_text: "",
  content_types: [
    "ANY",
    "LANDING_PAGE",
    "SITE_PAGE",
    "BLOG_POST",
    "BLOG_LISTING",
  ],
  js_assets: [],
  other_assets: [],
  smart_type: "NOT_SMART",
  tags: [],
  is_available_for_new_content: true,
};
