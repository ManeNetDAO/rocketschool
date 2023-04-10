export default function CircleArrow({ color = '#F26122' }) {
  return (
    <svg
      width="28"
      height="19"
      viewBox="0 0 28 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="18.7415"
        cy="9.25714"
        r="8.61429"
        stroke={color}
        strokeWidth="1.28571"
      />
      <path
        d="M1 8.40067C0.526613 8.40067 0.142857 8.78443 0.142857 9.25781C0.142857 9.7312 0.526613 10.115 1 10.115V8.40067ZM22.4347 9.8639C22.7694 9.52917 22.7694 8.98646 22.4347 8.65172L16.9798 3.1969C16.6451 2.86216 16.1024 2.86216 15.7677 3.1969C15.4329 3.53163 15.4329 4.07435 15.7677 4.40908L20.6164 9.25781L15.7677 14.1065C15.4329 14.4413 15.4329 14.984 15.7677 15.3187C16.1024 15.6535 16.6451 15.6535 16.9798 15.3187L22.4347 9.8639ZM1 10.115H21.8286V8.40067H1V10.115Z"
        fill="#F26122"
      />
    </svg>
  );
}
