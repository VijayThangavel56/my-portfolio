function FormInput({ id, label, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-slate-300 mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full p-4 rounded-xl bg-slate-700 text-white border border-slate-600 
                   focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-slate-400"
      />
    </div>
  );
}

export default FormInput;
