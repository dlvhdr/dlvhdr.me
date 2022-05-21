import { getSortedPostsData, PostMatter } from "../lib/posts";
import { GetServerSideProps } from "next";

const DLVHDR_HOSTNAME = "https://dlvhdr.me";
const EXTERNAL_DATA_URL = `${DLVHDR_HOSTNAME}/posts`;

function SiteMap() {
  return null;
}

function generateSiteMap() {
  const posts: PostMatter[] = getSortedPostsData();
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${DLVHDR_HOSTNAME}</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
