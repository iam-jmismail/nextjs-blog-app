import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <header> Header </header>
      {children}
      <footer> &copy; All right reserverd</footer>
    </div>
  );
}

export default Layout;
