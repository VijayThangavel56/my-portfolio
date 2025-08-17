function SocialInput({ id, label, value, onChange, placeholder, Icon }) {
  return (
    <div className="relative">
      <label htmlFor={id} className="block text-slate-300 mb-2">
        {label}
      </label>
      <input
        id={id}
        type="text"
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-4 pl-12 rounded-xl bg-slate-700 text-white border border-slate-600 
                   focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-slate-400"
      />
      <Icon className="absolute left-4 top-[3.2rem] text-slate-400" size={20} />
    </div>
  );
}

export default SocialInput;
