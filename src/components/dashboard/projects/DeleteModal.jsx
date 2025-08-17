function DeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-slate-800 p-6 rounded-xl shadow-2xl max-w-sm w-full">
        <h3 className="text-xl font-bold text-white mb-4">Confirm Delete</h3>
        <p className="text-slate-300 mb-6">Are you sure you want to delete this project? This action cannot be undone.</p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-bold shadow-md transform hover:scale-105 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
