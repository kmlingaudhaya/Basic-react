//function based components

//PascalCasing
function Message() {
  // JSX: Javascript XML
  const name = "Linga";
  if (name) return <h1>Hello {name}</h1>;
  else return <h1>Hello</h1>;
}

export default Message;
