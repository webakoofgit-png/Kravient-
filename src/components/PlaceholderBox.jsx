export default function PlaceholderBox({ label, className = '', tall = false }) {
  return (
    <div className={`placeholder-box ${tall ? 'is-tall' : ''} ${className}`.trim()}>
      <span>{label}</span>
    </div>
  );
}
