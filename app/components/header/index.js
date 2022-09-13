import Head from "next/head"

export default function Header(props) {
  return (
    <div>
      <Head>
        <title>App Name | {props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  )
}
