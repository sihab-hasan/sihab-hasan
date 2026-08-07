const Orbs = () => (
  <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
    <div className="absolute -top-32 left-1/4 size-80 rounded-full bg-card/80 blur-2xl" />
    <div className="absolute -right-16 top-4 size-64 rounded-full bg-accent/40 blur-2xl" />
    <div className="absolute -bottom-64 -left-16 size-96 rounded-full bg-card/70 blur-2xl" />
    <div className="absolute left-2/5 top-1/2 size-44 rounded-full bg-secondary/90 blur-xl" />
    <div className="absolute bottom-16 right-1/12 size-32 rounded-full bg-accent/45 blur-xl" />
    <div className="absolute right-1/4 top-16 size-20 rounded-full bg-muted blur-lg" />
  </div>
);

export default Orbs;
