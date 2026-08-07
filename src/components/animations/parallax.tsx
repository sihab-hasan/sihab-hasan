import type { ReactNode } from "react";

const Parallax = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

export default Parallax;
