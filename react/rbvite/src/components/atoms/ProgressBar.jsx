const ProgressBar = () => {
  <>
    <div className="relative mb-5">
      <div className="rounded-full border border-red-500 p-1">
        <div
          className="flex h-6 items-center justify-center rounded-full bg-red-300 text-xs leading-none"
          style="width: 85%; height: 85%;"
        >
          <span className="p-1 text-white">85%</span>
        </div>
      </div>
    </div>
    <h1>test</h1>
  </>;
};

export default ProgressBar;
