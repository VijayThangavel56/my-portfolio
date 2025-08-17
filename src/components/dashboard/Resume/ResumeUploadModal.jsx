// components/ResumeUploadModal.jsx
import React from "react";
import { X } from "lucide-react";

function ResumeUploadModal({
  isOpen,
  onClose,
  resumeFile,
  handleFileChange,
  handleResumeUpload,
  uploadProgress,
  uploadStatus,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 rounded-xl shadow-2xl border border-slate-700 w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <h3 className="text-xl font-semibold text-white">Upload Resume</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleResumeUpload} className="p-6">
          <div className="mb-6">
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Select PDF File
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="block w-full text-sm text-slate-400
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-slate-700 file:text-slate-300
                hover:file:bg-slate-600"
            />
            {resumeFile && (
              <p className="mt-2 text-sm text-slate-400">
                Selected: {resumeFile.name}
              </p>
            )}
          </div>

          {uploadProgress > 0 && (
            <div className="mb-4">
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div
                  className="bg-sky-500 h-2.5 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-right text-xs text-slate-400 mt-1">
                {uploadProgress}%
              </p>
            </div>
          )}

          {uploadStatus && (
            <p
              className={`mb-4 text-sm ${
                uploadStatus === "Upload successful!"
                  ? "text-green-400"
                  : "text-rose-400"
              }`}
            >
              {uploadStatus}
            </p>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg font-medium text-slate-300 bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!resumeFile || uploadStatus === "Uploading..."}
              className={`px-4 py-2 rounded-lg font-medium text-white transition-colors ${
                !resumeFile || uploadStatus === "Uploading..."
                  ? "bg-sky-700 cursor-not-allowed"
                  : "bg-sky-600 hover:bg-sky-700"
              }`}
            >
              {uploadStatus === "Uploading..." ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResumeUploadModal;
