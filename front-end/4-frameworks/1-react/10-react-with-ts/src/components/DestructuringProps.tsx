type DestructuringPropsProps = {
  title: string;
  content: string;
  commentQty: number;
  tags: string[];

  /* 7 - enum */
  category: Category;
};

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python",
}

const DestructuringProps = ({
  title,
  commentQty,
  content,
  tags,
  category,
}: DestructuringPropsProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentQty}</p>
      <div>
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
};

export default DestructuringProps;
