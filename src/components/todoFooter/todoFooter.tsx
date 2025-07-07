import s from "./todoFooter.module.css";
import type {FilterType} from "../../types/todoType.ts";

type Props = {
  activeCount: number;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  onClear: () => void;
};

export const TodoFooter = ({
                             activeCount,
                             filter,
                             setFilter,
                             onClear,
                           }: Props) => {
  const filters: FilterType[] = ["all", "active", "completed"];

  const handleSetFilter = (value: FilterType) => () => {
    setFilter(value);
  };

  const handleClearCompleted = () => {
    onClear();
  };

  return (
    <div className={s.footer}>
      <span>{activeCount} items left</span>
      <div className={s.filters}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={handleSetFilter(f)}
            className={`${s.filterButton} ${filter === f ? s.active : ""}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <button className={s.clearButton} onClick={handleClearCompleted}>
        Clear completed
      </button>
    </div>
  );
};
