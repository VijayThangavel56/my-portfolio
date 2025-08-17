// src/components/portfolio/about/AboutContent.jsx
export const AboutContent = ({ profile }) => {
  if (!profile) return <p className="text-center">Loading...</p>;
  
  const { introduction = "", description = [] } = profile;
  const content = `${introduction}\n\n${description.join("\n\n")}`;
  
  return (
    <p className="text-center text-lg md:text-xl max-w-3xl mx-auto whitespace-pre-wrap">
      {content}
    </p>
  );
};