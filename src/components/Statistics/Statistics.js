import { DataBlock, Datalist } from './statistics.styles';

export const Statistics = ({ stats, tittle }) => {
  return (
    <section>
      {tittle ? <h2>Upload stats</h2> : null}
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
