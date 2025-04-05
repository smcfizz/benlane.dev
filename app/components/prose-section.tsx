export default function ProseSection({ title, children }) {
    return (
        <>
            <h2 className="mt-6 mb-8 text-4xl font-semibold tracking-tighter">{title}</h2>
            <p className="mb-4">{children}</p>
        </>
    );
}