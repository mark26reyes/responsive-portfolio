import mdrLogo from "../assets/MDR.png";
import "./Loader.css";

type LoaderProps = {
  fadeOut: boolean;
};

export default function Loader({ fadeOut }: LoaderProps) {
  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        bg-[#464A3E]
        transition-opacity duration-700 ease-in-out
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className={`
            transition-all duration-700 ease-in-out
            ${
              fadeOut
                ? "scale-110 blur-[2px] opacity-0"
                : "scale-100 blur-0 opacity-100"
            }
          `}
        >
          <img src={mdrLogo} alt="MDR logo" className="w-80 md:w-80 lg:w-80" />
        </div>
        <div
          className={`
            h-1 w-60 rounded-full bg-white/20 overflow-hidden
            transition-opacity duration-500
            ${fadeOut ? "opacity-0" : "opacity-100"}
          `}
        >
          <span className="loader-progress block" />
        </div>
      </div>
    </div>
  );
}
