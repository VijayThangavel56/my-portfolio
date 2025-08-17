// src/components/portfolio/about/ResumeDownloadButton.jsx
export const ResumeDownload = ({ resume, onDownload }) => {
  if (!resume) return null;
  
  return (
    <div className="text-center mt-8">
      <button
        onClick={onDownload}
        className="inline-block bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
      >
        Download Resume
      </button>
    </div>
  );
};