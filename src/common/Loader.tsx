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
        <img
          src="/src/assets/MDR.png" // bytt til riktig path til logoen
          alt="MDR logo"
          className="w-80 md:w-80 lg:w-80"
        />
      </div>
    </div>
  );
}
