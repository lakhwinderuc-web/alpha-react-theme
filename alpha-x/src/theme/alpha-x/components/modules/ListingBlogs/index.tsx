
import { Island } from '@hubspot/cms-components';
import noImg from '../../../images/noimage.png'
import Pagination from './Island/Pagination.js?island';


export const Component = ({ hublData }) => {
const {posts=[],pagination={}}=hublData;

console.log("pagination",pagination);
  return (
    <>
    <style>
      {
        `.blog-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.blog-card img {
    display: block;
    height: 300px !important;
    object-fit: cover;
    width: 100%;
}
`


      }
    </style>
    <div className="blog-section">
     {posts.map((post)=>{
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

 <span className="blog-author">
           <a href={`${blogBasePath}/author/${authorSlug}`}>
                {post.authorName}
              </a>
          </span>
            | {new Date(post.publishDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </h4>
        )}
          </div>
  {/* Title */}
          <h3>
            <a href={post.absoluteUrl}>{post.title}</a>
          </h3>
<p>
  {post.body 
    ? post.body.replace(/<[^>]*>/g, '').split(' ').slice(0, 20).join(' ') + (post.body.split(' ').length > 30 ? '...' : '')
    : ''
  }
</p>

<a href={post.absoluteUrl}>
  Read more
</a>
   <h4 className="read-time">
  {Math.ceil((post.body?.replace(/<[^>]*>/g, '').split(' ').length || 0) / 200)} min read
</h4>
         
      </div>
    )
     })}
   
    </div>
      <Island
     hydrateOn='load'
     module={Pagination}
     moduleName="Pagination"
     clientOnly={true}
     currentPageNumber={pagination.currentPageNumber}
  nextPageNumber={pagination.nextPageNumber}
  previousPageNumber={pagination.previousPageNumber}
  totalPageCount={pagination.totalPageCount}
     />
    </>
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
        featuredImage: post.featuredImage,
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
    'posts': blog_posts,
    'blogPostIds': blog_post_ids,
    'isInEditor': is_in_editor,
    'renderedWithGrids': rendered_with_grids,
    pagination:{
    'currentPageNumber': current_page_num || 1,
    'nextPageNumber': next_page_num,
    'previousPageNumber': previous_page_num||1,
    'totalPageCount': contents.total_page_count || 2,
}
} %}


`;

export const meta = {
 "label": "Listing Blogs",
 "css_assets": [],
 "external_js": [],
 "global": false,
 "help_text": "",
 "content_types": [
  "ANY",
  "LANDING_PAGE",
  "SITE_PAGE",
  "BLOG_POST"
 ],
 "js_assets": [],
 "other_assets": [],
 "smart_type": "NOT_SMART",
 "tags": [],
 "is_available_for_new_content": true
}