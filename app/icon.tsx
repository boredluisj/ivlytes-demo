import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B1120",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
        }}
      >
        {/* IV text with teal accent */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontWeight: "900",
              color: "#2DD4BF",
              letterSpacing: "-0.5px",
              lineHeight: "1",
              fontFamily: "sans-serif",
            }}
          >
            IV
          </span>
          {/* Teal underline bar */}
          <div
            style={{
              width: "18px",
              height: "2.5px",
              background: "#2DD4BF",
              borderRadius: "2px",
              marginTop: "3px",
            }}
          />
          {/* Droplet indicator */}
          <div
            style={{
              width: "5px",
              height: "7px",
              background: "#2DD4BF",
              borderRadius: "0 0 3px 3px",
              marginTop: "1px",
              opacity: "0.7",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
