import { useState } from "react";

export default function App() {

  const [key, setKey] = useState<KeyboardEvent | null>(null)
  window.addEventListener('keydown', (e) => {
    setKey(e)
  })

  return (
    <div>
      <h1>Key pressed: {key?.key}</h1>
      <h1>Key code: {key?.code}</h1>
    </div>
  );
}
