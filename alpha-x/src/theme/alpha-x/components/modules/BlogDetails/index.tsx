import noImg from "../../../images/noimage.png";

export const Component = ({ hublData }) => {
  const { content } = hublData;
  const absoluteUrl = content.absoluteUrl;
  const blogBasePath = absoluteUrl.split("/").slice(0, -1).join("/");

  // const authorSlug = content.authorName
  //   .toLowerCase()
  //   .trim()
  //   .replace(/\s+/g, "-");

  return (
    <div className="blog-details">
      <div className="blog-details__heading">
        <h1>{content.title}</h1>
      </div>
      <div className="author-social-grid">
        <div className="author-bio">
          <span className="author-name">
            <a href={content.authorSlug}>
              <span></span>
              {content.authorName}
            </a>
          </span>
          <ul>
            <li>
              <span>
                {new Date(content.publishDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>{" "}
              |
            </li>
            <li>
              <span className="reading-minutes">
                <span className="reading-minutes">
                  {" "}
                  {Math.ceil(
                    (content.body?.replace(/<[^>]*>/g, "").split(" ").length ||
                      0) / 200
                  )}{" "}
                  min read
                </span>
              </span>
            </li>
          </ul>
          <div className="social-sharing">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${absoluteUrl}`}
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${absoluteUrl}`}
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${absoluteUrl}`}
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${absoluteUrl}`}
              target="_blank"
              data-action="share/whatsapp/share"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="blogs-details__feature-img">
        {content.featuredImage && (
          <a href={content.absoluteUrl}>
            <img
              src={content.featuredImage || noImg}
              alt={content.featuredImageAltText || content.title}
              width={content.featuredImageWidth}
              height={content.featuredImageHeight}
              loading="lazy"
            />
          </a>
        )}
      </div>
      <div className="blog-details__blog-post">
        <div className="blog-details__blog-post-body">{content.body}</div>
      </div>
      <div className="blog-details__tag">
        {content.topicNames?.length > 0 && (
          <div className="blog-tags">
            {content.topicNames.map((tag, index) => {
              const tagSlug = tag.toLowerCase().trim().replace(/\s+/g, "-");

              return (
                <a
                  key={index}
                  href={`${blogBasePath}/tag/${tagSlug}`}
                  className="blog-tag"
                >
                  <p className="hubspot-topic_data">Topics:{tag}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export { fields } from "./fields.js";

export const hublDataTemplate = `
{% if module.blog is number %}
    {% set blog = module.blog %}
{% else %}
    {% set blog = 'default' %}
{% endif %}


{% set blog_post_ids = [] %}
{% set blog_posts = [] %}

{% for post in contents %}
  {% do blog_post_ids.append(post.id) %}

    {% set temp_post = {
        id: post.id,
        absoluteUrl: post.absoluteUrl|escape_url,
        featuredImage: post.featuredImage ||noImg,
        featuredImageAltText: post.featuredImageAltText,
        featuredImageWidth: post.featuredImageWidth,
        featuredImageHeight: post.featuredImageHeight,
        title: post.label,
        topicNames: post.topicNames,
        publishDate: post.publish_date_local_time,
        authorName: post.blog_author.display_name,
        authorSlug: post.blog_author.slug,
        body: post.post_body
    } %}
    {% do blog_posts.append(temp_post) %}
{% endfor %}

{% set hublData = {
    'content': blog_posts,
    'blogPostIds': blog_post_ids,
    'isInEditor': is_in_editor,
    'renderedWithGrids': rendered_with_grids,

} %}


`;
export const meta = {
  label: "Blog Details",
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
