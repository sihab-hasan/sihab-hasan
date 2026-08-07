import Orbs from "./orbs";

const Background = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg"
  >
    <Orbs />
  </div>
);

export default Background;
