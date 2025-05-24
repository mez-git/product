import "../styles/NoProductFound.css";

export default function NoProductFound() {
  return (
    <div className="custom-noprodut-bg">
      <div>
        <h1>Oops!!! No product found.</h1>
      </div>
      <div className="dot-loader">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <p>keep searching.</p>
    </div>
  );
}
