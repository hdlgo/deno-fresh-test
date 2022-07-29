/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Navgition from "../islands/Navgition.tsx";
import { PageProps, Handler } from "$fresh/server.ts";
import { moment } from "$moment";

interface University {
  domains: string[];
  web_pages: string[];
  "state-province": string;
  name: string;
  country: string;
  alpha_two_code: string;
}

export const handler: Handler<University[] | null> = {
  async GET(_, ctx) {
    const textList = await fetch("https://cloudapi.bytedance.net/faas/services/ttixeo/invoke/getTable");
    const textListJson = await textList.json();
    return ctx.render({
      textList: textListJson,
    });
  },
  async POST(req, ctx) {
    console.log({ req, ctx });
    const url = "https://cloudapi.bytedance.net/faas/services/ttixeo/invoke/hello";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        text: "ceshiceshi",
      }),
    });
    const textList = await fetch("https://cloudapi.bytedance.net/faas/services/ttixeo/invoke/getTable");
    const textListJson = await textList.json();
    return ctx.render({
      textList: textListJson,
    });
  },
};

export default function Table({ data }: PageProps<University[] | null>) {
  if (!data) return <div class={tw`p-4 mx-auto max-w-screen-md`}>loading...</div>;
  const { textList } = data;
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Navgition></Navgition>
      <p class={tw`my-6 text-3xl font-bold`}>my table list</p>
      <form class={tw`my-6`} method="post">
        {/* <input class={tw`border(gray-100 1)`} type="text" name="write" /> */}
        <button type="submit">Add</button>
      </form>
      {(textList || []).reverse().map((item) => (
        <div class={tw`my-4`}>
          <h2>{item.test123}</h2>
          <h2>{item.text}</h2>
          <p>{moment(item.createdAt).format("YYYY-MM-DD HH:mm:ss")}</p>
          <p>{moment(item.updatedAt).format("YYYY-MM-DD HH:mm:ss")}</p>
        </div>
      ))}
    </div>
  );
}
