import { useGetCharacter } from "@/hooks/useGetCharacter";
import { Loading } from "@/components/Loading";
import { Error } from "@/components/Layout/Error";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from 'next/head'
import { CharacterDetailonPage } from "@/components/CharacterDetailonPage";

export default function Character() {

  const router = useRouter();
  const { id } = router.query

  const { data, error, loading } = useGetCharacter({ id: String(id) });

  return (
    <>
      <Head>
        <title>Ricky and Morty Panel - {data?.character?.name}</title>
        <meta name="description" content="Test - Use Ricky Morty Api - Datlo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        loading ?
          <Loading /> : null
      }
      {
        error ? <Error /> : null
      }
      {
        !error && !loading && data?.character &&
        <CharacterDetailonPage character={data.character} />
      }
    </>
  )
}
