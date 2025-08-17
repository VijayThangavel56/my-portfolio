import { BiPencil, BiTrash, BiPlus } from "react-icons/bi";

function ProjectsTable({ projects, openModal, handleDeleteClick }) {
  return (
    <section>
      <div className="flex justify-end mb-8">
        <button
          onClick={() => openModal("add")}
          className="flex items-center space-x-2 bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 shadow-lg"
        >
          <BiPlus size={20} />
          <span>Add Project</span>
        </button>
      </div>
      <div className="bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
        <div className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 p-10">
          <h2 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-md">
            My Projects
          </h2>
          <p className="text-fuchsia-100 mt-2 text-lg font-light">
            A selection of projects I’ve built and contributed to.
          </p>
        </div>
        <div className="overflow-x-auto bg-slate-900 rounded-xl shadow-xl border border-slate-800 p-6">
          <table className="min-w-full divide-y divide-slate-700">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">
                  Tags
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-slate-900 divide-y divide-slate-700">
              {projects.map((p) => (
                <tr key={p.id} className="hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-white">{p.title}</td>
                  <td className="px-6 py-4 max-w-xs truncate text-sm text-slate-300">
                    {p.description}
                  </td>
                  <td className="px-6 py-4">
                    {p.imageUrl && (
                      <img
                        src={p.imageUrl}
                        alt={p.title}
                        className="h-12 w-12 object-cover rounded border border-slate-700"
                      />
                    )}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-300">{p.tags}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => openModal("update", p)}
                      className="bg-green-500 text-white p-2 rounded-full mr-2 hover:bg-green-600"
                    >
                      <BiPencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(p.id)}
                      className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                    >
                      <BiTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProjectsTable;
