export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "small" ? "5px 10px" : "10px 20px",
        fonsize: size === "small" ? "12px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};
//instead of passing the props to the button, we can pass the props to the component
//Button color="red" text="Click me" size="small", etc.
// danger button will be allwas red
export const DangerButton = (props) => {
  return <Button color="red" {...props} />;
};

export const LargeSuccessButton = (props) => {
  return <Button size={"large"} color="green" {...props} />;
};
