import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    //agr props.alert NULL nahi hai to Right side wala kam kr do, means k alert show ho jaye gi.
    //agr props.alert ki value null hoi to right side wala code nahi chaly ga
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong> {capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )
  );
}
