export default function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
}) {
  const baseClasses =
    "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <div>

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={baseClasses}
          value={value}
          onChange={onChange}
        />

    </div>
  );
}