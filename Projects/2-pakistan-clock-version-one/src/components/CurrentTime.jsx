let CurrentTime = () => {
  let Time = new Date();

  return (
    <p className="lead">
      This is the current Time: {Time.toLocaleTimeString()} -{" "}
      {Time.toDateString()}
    </p>
  );
};

export default CurrentTime;
