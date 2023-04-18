export type Props = {
  src: string;
  id?: string;
  borderRadius?: string;
  onLoad?: () => void;
};

export const Video = ({ src, id, borderRadius, onLoad }: Props) => {
  return (
    <iframe
      id={id}
      width={'100%'}
      height={'100%'}
      onLoad={onLoad}
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ border: 0, borderRadius }}
    ></iframe>
  );
};
