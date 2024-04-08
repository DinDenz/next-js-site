import Link from "next/link";

export default function Client() {
  return (
    <div>
      <h1>Client page</h1>
      <Link href='/'>Главная</Link>
      <br />
      <Link href='/client/show'>Клиент показать</Link>
    </div>
  )
}
