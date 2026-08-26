import PlaceholderBox from './PlaceholderBox';

export default function VideoPlaceholder() {
  return (
    <div className="video-frame">
      <PlaceholderBox label="Video / Reel" className="video-box" tall />
      <div className="play-icon" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
