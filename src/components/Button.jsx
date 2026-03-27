export function Button({type,text}) {
  return (
    <button type={type} className="md:block hidden bg-secondary text-tertiary rounded-2xl p-2 hover:border hover:border-bg-secondary hover:text-text-secondary hover:bg-bg-primary transition duration-300 cursor-pointer">
      {text}
    </button>
  );
}
