import Dashboard from "./_components/Dashboard";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <main className="bg-ternary text-ternary min-h-screen w-full p-12">
      <Dashboard />
    </main>
  );
}
