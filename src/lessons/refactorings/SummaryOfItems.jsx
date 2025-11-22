export default function SummaryOfItems({ items, total }) {
  return (
    <section>
      <h3>Resumen</h3>
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            {it.name} — ${it.price}
          </li>
        ))}
      </ul>
      <strong>Total: ${total}</strong>
    </section>
  );
}
