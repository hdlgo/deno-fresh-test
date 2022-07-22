/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function Navgition(props) {
  console.log({ props });
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  const routerMap = [
    {
      key: "home",
      pathname: "",
    },
    {
      key: "table",
      pathname: "/table",
    },
    {
      key: "countdown",
      pathname: "/countdown",
    },
    {
      key: "counter",
      pathname: "/counter",
    },
    {
      key: "universities",
      pathname: "/universitiesList",
    },
    {
      key: "search",
      pathname: "/search",
    },
  ];
  return (
    <div class={tw`flex gap-2 w-full`}>
      {routerMap.map((route) => (
        <button class={btn} onClick={() => window.location.assign(`${window.location.origin}${route.pathname}`)} disabled={!IS_BROWSER}>
          {route.key}
        </button>
      ))}
    </div>
  );
}
