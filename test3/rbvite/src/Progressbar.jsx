/* eslint-disable react/prop-types */
export default function Progressbar({ total, check }) {
  const sum = (check / total) * 100;
  return (
    <>
      <div className="relative mb-5">
        <div className="rounded-full border border-red-500 p-1">
          <div
            className="flex h-6 items-center justify-center rounded-full bg-red-300 text-xs leading-none"
            style={{ width: `${sum}%`, height: `${sum}%` }}
          >
            <span className="p-1 text-white">{sum}%</span>
          </div>
        </div>
      </div>
    </>
  );
}
