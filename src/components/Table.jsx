import TableItem from "./TableItem";
export default function Table({ sites ,onDeleteSite}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>index</th>
          <th>Website Name</th>
          <th>Visit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {sites.map((site, index) => (
          <TableItem key={index} site={site} id={index} onDeleteSite={onDeleteSite} />
        ))}
      </tbody>
    </table>
  );
}
