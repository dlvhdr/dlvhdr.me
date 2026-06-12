import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./links.module.css";

const LINKS = [
  {
    image: "../images/links/common_sense_skeptic.jpg",
    url: "https://youtube.com/@commonsenseskeptic",
    title: "Common Sense Skeptic",
    description: (
      <>
        A YouTube channel that debunks outrageous claims with simple math and
        logic.
        <br />
        If you're an Elon Musk hater like me or just want a more truthful view
        on him — you'll enjoy this channel.
      </>
    ),
  },
  {
    image:
      "https://pivot-to-ai.com/wp-content/uploads/2024/06/cropped-clip-icon.png",
    url: "https://www.youtube.com/@PivotToAI",
    title: "Pivot to AI",
    description: (
      <>
        A YouTube channel that harshly covers daily AI news. As you can probably
        tell I'm an AI "hater".
        <br />
        It describes itself simply as "Deflating the AI bubble".
      </>
    ),
  },
  {
    image: "https://internetofbugs.com/img/IoB_Shirt.png",
    url: "https://www.youtube.com/@InternetOfBugs",
    title: "Internet of Bugs",
    description: (
      <>
        A very well spoken and smart developer that covers with depth various
        topics on software eneering.
      </>
    ),
  },
  {
    image: "https://mollyrocket.com/r/molly_logo_80ab5040d770d5c7.png",
    url: "https://www.youtube.com/@InternetOfBugs",
    title: "Molly Rocket",
    description: (
      <>
        An experienced and very smart developer preaching about performance
        aware programming.
      </>
    ),
  },
  {
    image: "https://linkarzu.com/assets/img/imgs/260104-avatar.avif",
    url: "https://linkarzu.com/",
    title: "Linkarzu",
    description: (
      <>
        Content creator that's passionate about developer's setup - dotfiles,
        keyboards etc.
      </>
    ),
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo_Not_Just_Bikes.svg",
    url: "https://www.youtube.com/@NotJustBikes",
    title: "Not Just Bikes",
    description: (
      <>
        I'm a car hater thanks to this guy. He makes such good points on why we
        should be restricting cars more and how it leads to great people-centric
        urban planning.
      </>
    ),
  },
  {
    image:
      "https://substackcdn.com/image/fetch/$s_!RxBq!,w_170,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc6a2246b-c48e-47a7-9f3e-27fb27d85f72_971x971.png",
    url: "https://mayerchissick.com/",
    title: "Uri Mayer-Chissick",
    description: (
      <>
        This one's in Hebrew. Uri Mayer-Chissick is a food historian that
        teaches me and my family how to eat and live well. He describes his site
        as "An exploration of how ancient food and healing traditions can still
        guide how we eat, live, and care for ourselves today.".
      </>
    ),
  },
];

export default function Links() {
  return (
    <Layout className={styles.root} showBack={false}>
      <div className={styles.content}>
        <h1>Links</h1>
        <p>This is a list of links to any content I think is worth sharing.</p>
        <p>
          See the <a href="https://slashpages.net/">Slash Pages</a> site for an
          explanation of these kinds of pages.
        </p>
        <ul className={styles.links}>
          {LINKS.map((link) => (
            <li key={link.url}>
              <img src={link.image} width="60" height="60" />
              <div className={styles.linkText}>
                <a href={link.url}>{link.title}</a>
                <p className={styles.desc}>{link.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
