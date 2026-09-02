import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #071428 0%, #122d52 55%, #2563eb 140%)",
          color: "white",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 6, color: "#93C5FD" }}>XIG DIGITAL · KOLKATA</div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Digital Marketing Course in Kolkata
        </div>
        <div style={{ fontSize: 28, marginTop: 28, color: "#BFDBFE" }}>
          Practical training · Live-style projects · Career skills
        </div>
      </div>
    ),
    size,
  );
}
