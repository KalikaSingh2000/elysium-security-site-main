const PageLoader = () => (
  <div className="fixed inset-x-0 top-0 z-[60] h-[3px] overflow-hidden bg-transparent" aria-hidden="true">
    <div className="loader-sweep h-full w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent" />
  </div>
);

export default PageLoader;
