// src/components/InstagramEmbed.tsx
import React, { useEffect } from "react";

interface InstagramEmbedProps {
  url: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="12"
      >
        <a href={url}></a>
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;
