export type Props = {
  src: string;
  width: string;
  height: string;
  id?: string;
};

export const Video = ({ src, width, height, id }: Props) => {
  return (
    <iframe
      id={id}
      width={width}
      height={height}
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ border: 0 }}
    ></iframe>
  );
};
