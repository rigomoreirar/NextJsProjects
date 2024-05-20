import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>
                Hello! I am doing some testing on routes, don&apos;t mind me
                working around here! ^_^
            </h1>

            <p>
                <Link href="/users">Users</Link>
            </p>
        </main>
    );
}
