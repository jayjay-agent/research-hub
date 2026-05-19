import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <div className="font-serif text-4xl font-semibold text-ink-900">Not found</div>
      <p className="mt-2 text-ink-600">That artifact doesn&apos;t exist yet.</p>
      <Link href="/" className="mt-6 inline-block text-accent-700 hover:underline">
        ← Back to the workspace
      </Link>
    </div>
  );
}
