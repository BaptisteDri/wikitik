import { RandomArticlesListContainer } from "@/modules/random-articles/application/random-articles-list/random-articles-list.container";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RandomArticlesListContainer />
      </main>
      {/* curl -sL "https://en.wikipedia.org/api/rest_v1/page/random/summary" | jq */}
    </>
  );
}
