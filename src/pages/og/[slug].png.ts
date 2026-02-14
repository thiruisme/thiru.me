import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import sharp from "sharp";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { title: post.data.title },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { title } = props as { title: string };

  // Fetch a font at build time (Inter from Google Fonts)
  const fontData = await fetch(
    "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"
  ).then((r) => r.arrayBuffer());

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          backgroundColor: "#1b4d3e",
          backgroundImage:
            "linear-gradient(rgba(43,122,87,0.4) 1.5px, transparent 1.5px), linear-gradient(to right, rgba(43,122,87,0.4) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "24px",
                      color: "#a7f542",
                      fontWeight: 400,
                      letterSpacing: "0.05em",
                    },
                    children: "thiru.me",
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: title.length > 50 ? "48px" : "56px",
                      color: "#e8f5e9",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      textWrap: "balance",
                    },
                    children: title,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "20px",
                      color: "#5db92c",
                      marginTop: "16px",
                    },
                    children: "Thiru's Internet Corner",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
