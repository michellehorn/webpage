const Input = ({
  value,
  onChange,
  id
}: {
  value: string;
  onChange: () => {};
  id: string;
}) => <input onChange={onChange} id={id} value={value} />;
