export default function printProps(Components) {
  //don't fallow same convention as in react JSX
  //we NEVER use <printProps>{Components}</printProps>
  //we will return a function that will be called with the props
  return (props) => <Components {...props} />;
  //   return (props) => <Components {...props} />;
}
