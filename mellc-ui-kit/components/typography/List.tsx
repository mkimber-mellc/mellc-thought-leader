import { ListsProps } from './types-typography';
import { textColorClass } from '../../theme';

export default function Lists<T>({
  color = 'black',
  listDisc = false,
  lists,
  renderItem,
  width = 'w-full',
}: ListsProps<T>) {
  const textColor = textColorClass[color as keyof typeof textColorClass] || color;
  const listStyle = listDisc ? 'list-disc pl-6' : 'list-none';

  return (
    <ul className={`${textColor} ${listStyle} ${width}`}>
      {lists.map((item, index) => (
        <li key={index}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
}
