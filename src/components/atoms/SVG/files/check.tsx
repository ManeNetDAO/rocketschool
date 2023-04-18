export default function Check({ color = '#FF7F00' }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.03 15.33L16.4325 7.9275L14.9625 6.4575L9.03 12.39L6.0375 9.3975L4.5675 10.8675L9.03 15.33ZM10.5 21C9.0475 21 7.6825 20.7242 6.405 20.1726C5.1275 19.6217 4.01625 18.8738 3.07125 17.9287C2.12625 16.9837 1.3783 15.8725 0.8274 14.595C0.2758 13.3175 0 11.9525 0 10.5C0 9.0475 0.2758 7.6825 0.8274 6.405C1.3783 5.1275 2.12625 4.01625 3.07125 3.07125C4.01625 2.12625 5.1275 1.37795 6.405 0.82635C7.6825 0.27545 9.0475 0 10.5 0C11.9525 0 13.3175 0.27545 14.595 0.82635C15.8725 1.37795 16.9837 2.12625 17.9287 3.07125C18.8738 4.01625 19.6217 5.1275 20.1726 6.405C20.7242 7.6825 21 9.0475 21 10.5C21 11.9525 20.7242 13.3175 20.1726 14.595C19.6217 15.8725 18.8738 16.9837 17.9287 17.9287C16.9837 18.8738 15.8725 19.6217 14.595 20.1726C13.3175 20.7242 11.9525 21 10.5 21Z"
        fill={color}
      />
    </svg>
  );
}
