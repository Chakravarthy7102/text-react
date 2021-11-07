import React from "react";

function Alert(props) {
  const capitilize = (word) => {
    let line = word.toLowerCase();

    return line.charAt(0).toUpperCase() + line.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.message} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitilize(props.alert.message)}</strong> :{props.alert.line}
      </div>
    )
  );
}

export default Alert;
