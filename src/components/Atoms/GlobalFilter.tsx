
interface Props {
  filter: any
  setFilter: any
}

function GlobalFilter({ filter, setFilter }: Props): JSX.Element {
  return (
    <div className="row justify-content-center m-3 bg-transparent">
      <div className="col-6 align-self-center">
        <div className="input-group " >
          <input type="text"
            className="form-control"
            placeholder="Search Filter..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)} />
          <button className="input-group-text pointer">
            <i className="fas fa-search"></i>
          </button>

        </div>
      </div>
    </div>
  );
}

export default GlobalFilter;
