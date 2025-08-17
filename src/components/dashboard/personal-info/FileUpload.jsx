function FileUpload({
  id,
  label,
  type = "file",
  value,
  onFileChange,
  placeholder,
  required,
  previewUrl,  
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-slate-300 mb-2">
        {label}
      </label>

      <input
        id={id}
        type={type}
        name={id}
        value={type === "file" ? undefined : value} // file input should not be controlled
        onChange={onFileChange}
        placeholder={placeholder}
        required={required}
        className="w-full text-slate-300 
                   file:mr-4 file:py-2 file:px-4 file:rounded-lg 
                   file:border-0 file:text-sm file:font-semibold
                   file:bg-fuchsia-600 file:text-white
                   hover:file:bg-fuchsia-700 cursor-pointer"
      />

      {/* Show image preview if available */}
      {previewUrl && (
        <img
          src={previewUrl}
          alt="Preview"
          className="mt-3 rounded-lg max-h-40 object-contain border border-slate-700"
        />
      )}
    </div>
  );
}

export default FileUpload;
