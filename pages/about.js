import Link from "next/link";
export default () => (
  <div>
    <div>About us</div>
    <div className="testing-image">this is testing</div>
    <h1 style={{ color: "blue" }}>THIS IS ABOUT PAGES</h1>
    <div>
      Back to
      <Link href="/" as={process.env.BACKEND_URL + "/"}>
        <a>Home</a>
      </Link>
    </div>
  </div>
);
