import randomColor from 'randomcolor';
const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map((stat, index) => (
          <li
            key={index}
            className="item"
            style={{ backgroundColor: randomColor() }}
          >
            <p className="label">{stat.label}</p>
            <p className="percentage">{stat.percentage}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
