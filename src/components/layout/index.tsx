/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "../footer";

function LandingLayout({ children }: any) {
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </div>
  );
}

export default LandingLayout;
