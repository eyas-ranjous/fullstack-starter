import { useHealth } from "./useHealth";

export default function App() {
  const { data, isPending, isError } = useHealth();

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Failed to reach API.</p>;

  return (
    <div>
      <h1>Fullstack Starter</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
