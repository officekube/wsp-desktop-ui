import React, { useState } from "react";

export const AsiderTask = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
            YTF Tutorial Gallery
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
              onClick={() => setSelectedVideo(videoId)}
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

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-black p-2 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <iframe
              className="w-[95vw] max-w-3xl h-[65vh] md:h-[75vh] rounded-lg"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default AsiderTask;