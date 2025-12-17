import noImg from '../../../images/noimage.png'

export const Component = ({ hublData }) => {
  const { posts = [] } = hublData;

  if (!posts.length) {
    return <div className="blog-section">No recent blogs</div>;
  }
  return (
    <div className="blog-section">
      {posts.map((post) => {

 const blogBasePath = post.absoluteUrl
    .split('/')
    .slice(0, -1)
    .join('/');

      const authorSlug = post.authorName
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
    return(
        <div key={post.id} className="blog-card">

         {/* TAGS */}
          {post.topicNames?.length > 0 && (
  <div className="blog-tags">
    {post.topicNames.map((tag, index) => {
      const tagSlug = tag
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-');
     
      return (
        <a
          key={index}
          href={`${blogBasePath}/tag/${tagSlug}`}
          className="blog-tag"
        >
          {tag}
        </a>
      );
    })}
  </div>
)}

          <div className="blog-date-author">
  {post.publishDate && (
          <h4>
            {new Date(post.publishDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          <span className="blog-author">
          
  <a href={`${blogBasePath}/author/${authorSlug}`}>
                | {post.authorName}
              </a>
          </span>
          </h4>
        )}
          </div>

            {/* Title */}
          <h3>
            <a href={post.absoluteUrl}>{post.title}</a>
          </h3>
          {/* image */}
          {post.featuredImage && (
            <a href={post.absoluteUrl}>
              <img
                src={post.featuredImage || noImg} 
                alt={post.featuredImageAltText || post.title}
                width={post.featuredImageWidth}
                height={post.featuredImageHeight}
                loading="lazy"
              />
            </a>
          )}
        </div>
      )})}
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

  {% for post in blog_recent_posts(blog, 3) %}
    {% do blog_post_ids.append(post.id) %}
    
  

    {% set temp_post = {
        id: post.id,
        absoluteUrl: post.absoluteUrl|escape_url,
        featuredImage: post.featuredImage,
        featuredImageAltText: post.featuredImageAltText,
        featuredImageWidth: post.featuredImageWidth,
        featuredImageHeight: post.featuredImageHeight,
        title: post.label,
        topicNames: post.topicNames,
        publishDate: post.publish_date_local_time,
        authorName: post.blog_author.display_name,
        authorSlug: post.blog_author.slug,
        tagName:blog_tag_links,
      
      }
    %}
    {% do blog_posts.append(temp_post) %}
  {% endfor %}
{# CREATE TAG ARRAY PER POST #}
  {% set blog_tag_links = [] %}

  {% if post.topicNames %}
    {% for tag in topicNames %}
      {% do blog_tag_links.append({
        "name": tag,
        "url": blog_tag_url(blog, tag)
      }) %}
    {% endfor %}
  {% endif %}
  {% set hublData = {
    'posts': blog_posts,
    'blogPostIds': blog_post_ids,
    'isInEditor': is_in_editor,
    'renderedWithGrids': rendered_with_grids
    }
  %}
`;

export const meta = {
  label: "Recent Blogs Customised",
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
