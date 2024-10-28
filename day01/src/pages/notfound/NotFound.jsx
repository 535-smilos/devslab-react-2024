import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <>
      <h1 className="mt-4 text-xl text-center">404 not found</h1>
      <Link to="/" className="mt-4 text-xl text-center block">go back to homepage</Link> 
    </>
  );
};
