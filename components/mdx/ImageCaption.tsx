import Image from "next/image";

export default function ImageCaption({
  src,
  alt,
  caption,
  fullBleed = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  fullBleed?: boolean;
}) {
  return (
    <figure className={`not-prose my-10 ${fullBleed ? "-mx-6 sm:-mx-8 lg:-mx-16" : ""}`}>
      <div className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "16/9" }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover grayscale"
          sizes={fullBleed ? "100vw" : "(max-width: 768px) 100vw, 65vw"}
          unoptimized={src.startsWith("https://images.unsplash.com")}
        />
      </div>
      {caption && (
        <figcaption className={`text-[12px] font-sans text-[#a3a3a3] mt-3 leading-relaxed ${fullBleed ? "px-6 sm:px-8 lg:px-16" : ""}`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
