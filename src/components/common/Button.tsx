function Button() {
  /* 
    TODO: There will be several buttons
    Can pass label and onClick 
    */
  return (
    <button onClick={() => console.log("some event")}>
      <span>LABEL</span>
    </button>
  );
}

export default Button;
