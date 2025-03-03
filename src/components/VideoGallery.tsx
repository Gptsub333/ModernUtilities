import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface VideoProps {
  title: string;
  url: string;
}

const formatYouTubeEmbedURL = (url: string) => {
  try {
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    return url;
  } catch {
    return null; // In case of invalid URL
  }
};

const videos: VideoProps[] = [
  {
    title: "Modern Utilities - Customer Testimonials",
    url: "https://www.youtube.com/watch?v=DZLlw5BNQ3g&ab_channel=vibg", // Example Video ID
  },
  {
    title: "How to Get the Best Internet Deals",
    url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ", // Example Video ID
  },
  {
    title: "Top Cable TV Packages Explained",
    url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ", // Example Video ID
  },
  {
    title: "Modern Utilities - Customer Testimonials",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Example Video ID
  },
  {
    title: "How to Get the Best Internet Deals",
    url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ", // Example Video ID
  },
  {
    title: "Top Cable TV Packages Explained",
    url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ", // Example Video ID
  },

];

export const VideoGallery = () => {
  return (
    <section id="videos" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Explore Our
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Video Library{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground text-center pt-4 pb-8">
        Learn more about our services, customer experiences, and expert tips through our video library.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map(({ title, url }, index) => {
          const embedUrl = formatYouTubeEmbedURL(url);
          const [isError, setIsError] = useState(false);

          return (
            <Card key={index} className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-center">{title}</CardTitle>
              </CardHeader>

              <CardContent className="flex justify-center">
                {!isError && embedUrl ? (
                  <iframe
                    className="w-full h-48 rounded-lg"
                    src={embedUrl}
                    title={title}
                    onError={() => setIsError(true)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="flex items-center justify-center w-full h-48 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    ❌ Video Unavailable
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
