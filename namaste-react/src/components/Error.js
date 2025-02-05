import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { status, statusText, data } = error;
  // console.error("Error -->", error);
  return (
    <>
      <h1>OOPS!</h1>
      <h2> Something Wents WornWrong!</h2>
      <h3>{status + " - " + statusText}</h3>
      <h3>{data}</h3>
    </>
  );
};

export default Error;
