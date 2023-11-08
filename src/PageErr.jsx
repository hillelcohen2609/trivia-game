import { Link } from "react-router-dom";

export default function PageErr() {
  return (
    <div>
      <h1>Sorry No Page</h1>
      <p>
        back to <Link to="/">Home page</Link>
      </p>
    </div>
  );
}
