/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
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
    const universities = await fetch("http://universities.hipolabs.com/search?country=China");
    const universitiesJson = await universities.json();
    return ctx.render({
      universities: universitiesJson,
    });
  },
};

export default function Home({ data }: PageProps<University[] | null>) {
  if (!data) return <div class={tw`p-4 mx-auto max-w-screen-md`}>loading...</div>;
  const { universities } = data;
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Navgition></Navgition>
      <p class={tw`my-6 text-3xl font-bold`}>The universities in China</p>
      {universities.map((university) => (
        <div class={tw`my-4`}>
          <h2>{university.name}</h2>
          <p>{university["state-province"]}</p>
          <p>{university.alpha_two_code}</p>
        </div>
      ))}
    </div>
  );
}
