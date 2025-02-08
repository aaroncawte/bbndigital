import Image from "next/image";

import GradientA from "../GradientA";
import authorImage from "./aaron.jpg";
import {
  authorCardStyles,
  bioContainerStyles,
  imageContainerStyles,
  imageElementStyles,
  imageStyles,
} from "./AuthorCard.styles";

const AuthorCard = () => {
  return (
    <section className={authorCardStyles}>
      <div className={imageContainerStyles}>
        <div className={imageStyles}>
          <Image
            src={authorImage}
            alt="Profile picture of the author"
            fill
            className={imageElementStyles}
          />
        </div>
      </div>
      <div className={bioContainerStyles}>
        <h2>Aaron Cawte</h2>
        <p>
          Aaron is a Lead Software Engineer at Octopus Energy Group. Let him
          know if you liked this post using{" "}
          <GradientA
            href="https://x.com/aaroncawte/"
            target="_blank"
            rel="noopener"
          >
            @aaroncawte
          </GradientA>{" "}
          or by email on{" "}
          <GradientA
            href="mailto:aaron@bbn.digital"
            target="_blank"
            rel="noopener"
          >
            aaron@bbn.digital
          </GradientA>
          .
        </p>
      </div>
    </section>
  );
};

export default AuthorCard;
