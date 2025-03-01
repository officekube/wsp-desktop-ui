import React from "react";

export const AsiderTask = () => {
  const videos = [
    { url: "https://youtu.be/9lE0zw-cknE", title: "Overview of OfficeKube platform" },
    { url: "https://youtu.be/s-DM6bofRzo", title: "Use of a Workspace" },
  ];

  // Function to extract YouTube video ID
  const extractVideoId = (url: string) => {
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/(?:shorts|embed|v)\/|.*[?&]v=))([^?&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <div className="w-full flex-none py-8">
        <div className="flex items-center justify-center">
          <span className="text-white/60 text-base font-semibold">
            YT Tutorial Gallery
          </span>
        </div>
      </div>

      {/* Video Thumbnails */}
      <div className="flex flex-col items-center gap-4 p-4 overflow-auto">
        {videos.map((video) => {
          const videoId = extractVideoId(video.url);
          if (!videoId) return null; // Skip invalid URLs

          return (
            <div
              key={videoId}
              className="cursor-pointer"
              onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")}
            >
              <img
                className="w-full max-w-xs rounded-lg shadow-lg"
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={video.title}
              />
              <p className="text-white/80 text-sm text-center mt-2">
                {video.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AsiderTask;
