type PhoneIconProps = {
  className?: string;
};

export function PhoneIcon({ className }: PhoneIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .964.351 1.091.852l1.106 4.423a1.125 1.125 0 0 1-.417 1.131l-1.293 1.034a11.038 11.038 0 0 0 5.516 5.516l1.034-1.293a1.125 1.125 0 0 1 1.13-.417l4.424 1.106c.501.125.852.575.852 1.091V19.5A2.25 2.25 0 0 1 18.75 21.75h-1.5C9.656 21.75 2.25 14.344 2.25 5.25V4.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}