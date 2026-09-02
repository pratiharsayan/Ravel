import { learningProcess } from "@/data/features";

export function ProcessSection() {
  return (
    <ol className="relative grid gap-4 md:grid-cols-5">
      <div className="pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent md:block" />
      {learningProcess.map((item) => (
        <li key={item.step} className="relative rounded-3xl border border-line bg-white p-5 text-center shadow-sm">
          <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-navy text-sm font-bold text-white">
            {item.step}
          </span>
          <h3 className="mt-3 font-semibold text-navy">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
