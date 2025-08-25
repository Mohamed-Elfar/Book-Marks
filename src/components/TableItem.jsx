import Button from "./Button";

export default function TableItem({ site, id, onDeleteSite }) {
  return (
    <>
      <tr>
        <td>{id + 1}</td>
        <td>{site.siteName}</td>
        <td>
          <Button
            className="btn-primary"
            onClick={() => window.open(site.siteUrl, "_blank")}
          >
            Visit
          </Button>
        </td>
        <td>
          <Button className="btn-danger" onClick={() => onDeleteSite(id)}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}
