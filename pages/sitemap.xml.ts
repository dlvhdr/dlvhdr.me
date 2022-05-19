import { getSortedPostsData, PostData } from "../lib/posts";

const DLVHDR_HOSTNAME = "https://dlvhdr.me";
const EXTERNAL_DATA_URL = `${DLVHDR_HOSTNAME}/posts`;

type Props = {
  allPostsData: PostData[];
};

function SiteMap({ allPostsData }: Props) {
  return generateSiteMap(allPostsData);
}

function generateSiteMap(posts: PostData[]) {
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default SiteMap;
