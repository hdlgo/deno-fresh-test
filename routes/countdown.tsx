import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Countdown from "../islands/Countdown.tsx";
import Navgition from "../islands/Navgition.tsx";

import { tw } from "@twind";

/** @jsx h */
export default function Greet(props: PageProps) {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  /* The big event is happening <Countdown target={date.toISOString()} />. */

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Navgition></Navgition>
      <p class={tw`my-6`}>
        The big event is happening <Countdown target={date.toISOString()} />
      </p>
    </div>
  );
}
