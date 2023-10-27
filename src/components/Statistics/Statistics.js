import { DataBlock, Datalist } from './statistics.styles';

export const Statistics = ({ stats }) => {
  return (
    <section>
      <Datalist>
        {stats.map(stat => (
          <DataBlock key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </DataBlock>
        ))}
      </Datalist>
    </section>
  );
};
