import { BiPencil, BiTrash } from "react-icons/bi";

function SkillsGrid({ skills, openModal, handleDeleteClick }) {
  return (
    <div className="overflow-x-auto bg-slate-900 rounded-xl shadow-xl border border-slate-800 p-6">
      <table className="min-w-full divide-y divide-slate-700">
        <thead className="bg-slate-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">
              Icon
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-900 divide-y divide-slate-700">
          {skills.map((skill) => (
            <tr key={skill.id}>
              <td className="px-6 py-4 text-sm text-slate-300">
                {skill.name}
              </td>
              <td className="px-6 py-4">
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                )}
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => openModal("update", skill)}
                  className="bg-green-500 text-white p-2 rounded-full mr-2 hover:bg-green-600"
                >
                  <BiPencil size={18} />
                </button>
                <button
                  onClick={() => handleDeleteClick(skill.id)}
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
  );
}

export default SkillsGrid;
