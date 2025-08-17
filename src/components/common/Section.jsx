// src/components/common/Section.jsx
function Section({ title, children, id, className = "" }) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-white mb-12 border-b-2 border-fuchsia-500 inline-block pb-2">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
export default Section;