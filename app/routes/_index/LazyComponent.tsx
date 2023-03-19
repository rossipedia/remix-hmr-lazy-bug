export default function LazyComponent() {
  // Change the color here and you won't see the style change until a hard refresh
  return <p style={{ color: 'red' }}>This component is lazily rendered</p>;
}
