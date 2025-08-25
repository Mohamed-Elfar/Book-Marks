import Button from "./Button";

export default function Form({
  siteName,
  siteUrl,
  setSiteName,
  setSiteUrl,
  onAddSite,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!siteName || !siteUrl) return;
    console.log({ siteName, siteUrl });
    onAddSite({ siteName, siteUrl });
  }
  return (
    <form className="form py-4 mb-4" onSubmit={handleSubmit}>
      <div className="form-caption text-center">
        <h2>
          <i className="fa-solid fa-bookmark"></i>
          Bookmark your favorite sites
          <i className="fa-solid fa-bookmark"></i>
        </h2>
      </div>

      <div className="mb-4">
        <label htmlFor="siteNameInput">
          <i className="fa-solid fa-book-bookmark"> </i>
          <b>Site Name</b>
        </label>
        <input
          type="text"
          className="form-control my-2"
          name="sitename"
          placeholder="Bookmarker Name"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
        />
        <div className="alert alert-danger d-none">
          {" "}
          you should use A-Z and a-z{" "}
        </div>
      </div>
      <div>
        <label htmlFor="siteUrlInput">
          <i className="fa-solid fa-link"></i>
          <b> Site URL</b>
        </label>
        <input
          type="text"
          className="form-control my-2"
          name="siteurl"
          placeholder="Bookmarker Url"
          value={siteUrl}
          onChange={(e) => setSiteUrl(e.target.value)}
        />
      </div>
      <div className="text-center mt-4">
        <Button className="btn-submition">Submit</Button>
      </div>
    </form>
  );
}
