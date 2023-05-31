import { useSelector } from "react-redux";

function Alert() {
  const alertMsg = useSelector((state) => state.addNote.alert);

  console.log(alertMsg,"asdfghjkl;'");
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      <div
        className={`alert alert-${alertMsg?.status} alert-dismissible fadeshow `}
        role="alert"
      >
        <strong>{capitalize(alertMsg?.status)}</strong>  {alertMsg?.msg}
      </div>
    </div>
  );
}
export default Alert;

