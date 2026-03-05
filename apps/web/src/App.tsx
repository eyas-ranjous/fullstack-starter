import { useHealth } from "./useHealth";

export default function App() {
  const { data, loading } = useHealth();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Fullstack Starter</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
