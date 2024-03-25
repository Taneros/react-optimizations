export const LabeledBox = ({ label, children }) => {
  return (
    <div>
      <div>{label}</div>
      {children}
    </div>
  );
};
