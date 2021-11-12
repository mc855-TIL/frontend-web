import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h2>
        <Link href="/">
          <a>Voltar</a>
        </Link>
      </h2>
      <h1>First Post</h1>
    </>
  )
}