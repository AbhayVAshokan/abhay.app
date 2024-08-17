interface CardProps {
  index: number;
  title: string;
  subtitle?: string;
  summary: string;
  prefix: string;
}

const Card = ({ index, title, subtitle, summary, prefix }: CardProps) => (
  <div className="border-t border-zinc-600 py-6 flex gap-6">
    <span className="text-4xl text-zinc-400">{index.toString().padStart(2, '0')}</span>
    <div>
      <p className="text-sm lowercase text-zinc-400">{prefix}</p>
      <h3 className="text-2xl">{title}</h3>
      <h4 className="text-lg text-zinc-300 mb-3">{subtitle}</h4>
      <p>{summary}</p>
    </div>
  </div>
);

export default Card;
