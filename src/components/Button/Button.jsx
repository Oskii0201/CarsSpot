export function Button({ children, href, secondary, smHidden, ...props }) {
  const buttonStyles =
    "border border-darkblue font-roboto text-[15px] font-semibold leading-22.5px tracking-[-0.02em] text-center rounded-lg px-6 py-3 transition";
  const primaryStyles =
    "bg-white text-darkblue hover:bg-darkblue hover:text-white";
  const secondaryStyles =
    "bg-darkblue text-white hover:bg-transparent hover:text-darkblue";
  const hiddenSmBlock = "hidden sm:block";

  const buttonClass = secondary
    ? `${buttonStyles} ${secondaryStyles}`
    : `${buttonStyles} ${primaryStyles}`;
  return (
    <button
      className={`${buttonClass} ${smHidden ? hiddenSmBlock : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
