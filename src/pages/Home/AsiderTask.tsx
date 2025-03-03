import React from "react";

export const AsiderTask = () => {
  const videos = [
    { url: "https://youtu.be/9lE0zw-cknE", title: "Use of a Workspace" },
    { url: "https://youtu.be/s-DM6bofRzo", title: "Overview of OfficeKube platform" },
  ];

  // Function to extract YouTube video ID
  const extractVideoId = (url: string) => {
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/(?:shorts|embed|v)\/|.*[?&]v=))([^?&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // open the video in a new tab inside a dimensioned container
  const openVideoTab = (videoId: string) => {
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    const newTab = window.open("", "_blank");

    if (newTab) {
      newTab.document.write(`
        <html>
          <head>
            <title>Video Player</title>
            <style>
              body {
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: black;
              }
              .container {
                width: 80vw;
                max-width: 900px;
                height: 60vh;
                background: #000;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
                padding: 20px;
              }
              iframe {
                width: 100%;
                height: 100%;
                border-radius: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <iframe 
                src="${videoUrl}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
          </body>
        </html>
      `);
      newTab.document.close();
    }
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
              onClick={() => openVideoTab(videoId)}
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
