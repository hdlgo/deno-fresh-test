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

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Navgition></Navgition>
      <p class={tw`my-6 text-3xl font-bold`}>Welcome</p>
      <img src="/logo.svg" height="100px" alt="the fresh logo: a sliced lemon dripping with juice" />
      <p class={tw`my-6`}>Welcome to `hedanli's fresh`. </p>
    </div>
  );
}
