const Input = ({
  onChange,
  nombre,
  nombrePlaceholder,
  typeInput,
  autoComplete,
  style,
}) => {
  return (
    <input
      className={style}
      type={typeInput}
      name="name"
      onChange={onChange}
      autoComplete={autoComplete}
      placeholder={nombrePlaceholder}
      value={nombre}
    />
  );
};

export default Input;
