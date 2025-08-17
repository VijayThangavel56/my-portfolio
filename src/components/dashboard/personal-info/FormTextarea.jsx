function FormTextarea({ id, label, value, onChange, placeholder, required, rows = 4 }) {
  return (
    <div>
      <label htmlFor={id} className="block text-slate-300 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full p-4 rounded-xl bg-slate-700 text-white border border-slate-600 
                   focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-slate-400"
      />
    </div>
  );
}

export default FormTextarea;
