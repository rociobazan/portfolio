import { ImageResponse } from "next/og";
import { site } from "@/config/site";

// Imagen que muestran LinkedIn, WhatsApp, etc. al compartir el enlace del sitio.
export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "linear-gradient(135deg, #fdf8fb 0%, #fce7f3 55%, #ede9fe 100%)",
          color: "#2a1830",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            backgroundImage: "linear-gradient(90deg, #c4206a, #7c3aed)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {site.name}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 40 }}>{site.role}</div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 30, color: "#6b5872" }}>
          C# · .NET · ASP.NET MVC · Entity Framework · SQL Server
        </div>
      </div>
    ),
    size,
  );
}
